# 🚀 Day 1 – Profile Card CLI Generator

This project is part of my 30-day backend development journey. It is a **Command-Line Interface (CLI)** tool built using **Node.js**, which takes user input from the terminal and generates a profile card. Optionally, it can also save the card to a `.txt` file.

---

## 📚 Concepts Covered

- `process.argv` for CLI input
- Input validation using `if` statements
- Timestamps with `Date()`
- Global variables `__dirname` and `__filename`
- File writing using `fs.writeFileSync()`
- Optional command flags (`--save`)
- Bonus: Colored terminal output using `chalk`

---

## 🛠 How to Run

### ✅ Run the file and print to terminal:
```bash
node Day1Project.js Nikhil 23 Chicago "Backend Developer"
```

### 💾 Save to `profile.txt` file:
```bash
node Day1Project.js Nikhil 23 Chicago "Backend Developer" --save
```

---

## 📦 Example Output

```
-------------------------------
🧑 Name      : Nikhil
🎂 Age       : 23
🏙️ City      : Chicago
💼 Profession: Backend Developer
🕐 Created At: 4/3/2025, 7:45:02 PM
-------------------------------
```

---

## 📁 Files

| File             | Description                            |
|------------------|----------------------------------------|
| `Day1Project.js` | Main CLI script                        |
| `profile.txt`    | Output file (if saved with `--save`)   |
| `package.json`   | NPM config file with chalk dependency  |

---

## 🔗 GitHub

Author: [@tnikhilchowdary](https://github.com/tnikhilchowdary)
