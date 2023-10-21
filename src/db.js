import { projectPath } from './config.js'
import path from 'node:path'
import fs from 'node:fs/promises'

const openDB = async () => {
  const dbPath = path.join(projectPath, 'db.txt')

  try {
    const file = await fs.readFile(
      dbPath,
      { encoding: 'utf-8' }
    )
    return JSON.parse(file)
  } catch {
    const initialData = {
      users: []
    }

    await fs.writeFile(dbPath, JSON.stringify(initialData, null, 2), 'utf-8')

    return initialData
  }
}

export default {
  openDB
}
