const { spawnSync } = require("node:child_process");

const build = spawnSync(
  process.execPath,
  ["node_modules/next/dist/bin/next", "build", "--webpack"],
  {
    stdio: "inherit",
    env: {
      ...process.env,
      STATIC_FILE_PREVIEW: "true"
    }
  }
);

if (build.status !== 0) {
  process.exit(build.status || 1);
}

const fix = spawnSync(process.execPath, ["fix-preview.cjs"], {
  stdio: "inherit"
});

process.exit(fix.status || 0);
