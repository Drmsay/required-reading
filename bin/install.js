#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const os = require("os");

const skillDir = path.join(os.homedir(), ".claude", "skills", "design-principles");
const skillSrc = path.join(__dirname, "..", "skills", "design-principles", "SKILL.md");
const skillDest = path.join(skillDir, "SKILL.md");

try {
  fs.mkdirSync(skillDir, { recursive: true });
  fs.copyFileSync(skillSrc, skillDest);

  console.log("\n  required-reading installed successfully!\n");
  console.log("  Skill file copied to:");
  console.log(`  ${skillDest}\n`);
  console.log("  Claude Code will now enforce professional design principles");
  console.log("  whenever you write, review, or design code.\n");
  console.log("  To verify, ask Claude to write a function or review some code —");
  console.log("  it should now cite specific principles with each suggestion.\n");
} catch (err) {
  console.error("\n  Installation failed:", err.message);
  console.error("\n  You can install manually:");
  console.error(`  mkdir -p ${skillDir}`);
  console.error(`  Then copy SKILL.md from the package to ${skillDest}\n`);
  process.exit(1);
}
