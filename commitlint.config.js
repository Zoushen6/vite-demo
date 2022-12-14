module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "✨ feat",
        "🎨 fix",
        "📝 docs",
        "💄 style",
        "♻ refactor",
        "⚡️ pref",
        "✅ test",
        "🔧 util",
        "⏪ revert",
      ],
    ],
    "scope-empty": [0],
    "type-empty": [0],
    "subject-empty": [0],
  },
};
