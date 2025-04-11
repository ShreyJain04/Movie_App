{
    "extends": "expo/tsconfig.base",
    "compilerOptions": {
      "strict": true,
      "baseUrl": ".", 
      "paths": {
        "@/*": ["./*"]
      }
    },
    "include": [
      "**/*.ts",
      "**/*.tsx",
      ".expo/types/**/*.ts",
      "expo-env.d.ts",
      "app/_layout.tsx",
      "nativewind-env.d.ts",
      "types/**/*.d.ts"
    ]
  }
  