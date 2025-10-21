import { spawnSync } from 'node:child_process'
import fs from 'node:fs'

fs.rmSync('dist', { recursive: true, force: true })

spawnSync('npx', ['rolldown', '-c', './rolldown.config.ts'], {
  stdio: 'inherit',
  cwd: process.cwd(),
  env: {
    ...process.env,
    ROLLDOWN_MODE: 'build',
  },
})
