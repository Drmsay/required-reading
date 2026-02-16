#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const os = require("os");

const args = process.argv.slice(2);

const withDomains = args.includes("--with-domains");
const coreOnly = args.includes("--core-only");
const specificDomains = args
  .filter((a) => a.startsWith("--domain="))
  .map((a) => a.replace("--domain=", ""));

const allDomains = [
  "software-engineering",
  "architecture",
  "testing",
  "security",
  "devops",
  "data-engineering",
  "delivery",
  "product",
  "ux",
  "leadership",
];

const skillsBase = path.join(os.homedir(), ".claude", "skills");
const srcBase = path.join(__dirname, "..", "skills");

function installSkill(skillName) {
  const destDir = path.join(skillsBase, skillName);
  const srcFile = path.join(srcBase, skillName, "SKILL.md");
  const destFile = path.join(destDir, "SKILL.md");

  if (!fs.existsSync(srcFile)) {
    console.error(`  Warning: ${srcFile} not found, skipping.`);
    return false;
  }

  fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(srcFile, destFile);
  return true;
}

try {
  // Always install core skill
  console.log("\n  Installing required-reading v2.0.0...\n");

  const coreInstalled = installSkill("required-reading");
  if (!coreInstalled) {
    throw new Error("Core skill file not found.");
  }
  console.log("  [core] required-reading installed");

  // Determine which domain specialists to install
  let domainsToInstall = [];

  if (withDomains) {
    domainsToInstall = allDomains;
  } else if (specificDomains.length > 0) {
    domainsToInstall = specificDomains.filter((d) => {
      if (!allDomains.includes(d)) {
        console.error(`  Warning: Unknown domain "${d}". Skipping.`);
        return false;
      }
      return true;
    });
  }

  if (domainsToInstall.length > 0) {
    console.log("");
    let installed = 0;
    for (const domain of domainsToInstall) {
      const success = installSkill(`required-reading-${domain}`);
      if (success) {
        console.log(`  [domain] required-reading-${domain} installed`);
        installed++;
      }
    }
    console.log(`\n  ${installed} domain specialist(s) installed.`);
  }

  console.log("\n  Installation complete!\n");
  console.log("  Skill files copied to:");
  console.log(`  ${skillsBase}/required-reading/\n`);

  if (domainsToInstall.length > 0) {
    console.log("  Domain specialists available for deep-dive reviews");
    console.log("  and multi-agent Team Mode.\n");
  }

  console.log("  Claude Code will now enforce professional engineering");
  console.log("  standards across all 10 domains whenever you write,");
  console.log("  review, design, or plan software.\n");

  if (domainsToInstall.length === 0 && !coreOnly) {
    console.log("  Tip: Install domain specialists for deep-dive reviews:");
    console.log("  npx required-reading --with-domains        (all domains)");
    console.log(
      "  npx required-reading --domain=security     (specific domain)\n"
    );
    console.log("  Available domains:");
    for (const d of allDomains) {
      console.log(`    --domain=${d}`);
    }
    console.log("");
  }
} catch (err) {
  console.error("\n  Installation failed:", err.message);
  console.error("\n  You can install manually:");
  console.error(`  mkdir -p ${path.join(skillsBase, "required-reading")}`);
  console.error(
    `  Then copy SKILL.md from the package to ${path.join(skillsBase, "required-reading", "SKILL.md")}\n`
  );
  process.exit(1);
}
