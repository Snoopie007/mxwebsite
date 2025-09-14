# Documentation

This folder contains MDX files for various sections of the website.

## Structure

```
docs/
├── legal/           # Legal pages (Privacy Policy, Terms of Service, etc.)
│   ├── privacy-policy.mdx
│   ├── terms-of-service.mdx
│   └── cookie-policy.mdx
└── README.md        # This file
```

## Adding New Legal Pages

1. Create a new `.mdx` file in the `docs/legal/` folder
2. Add frontmatter with required metadata:
   ```yaml
   ---
   title: "Page Title"
   description: "Page description"
   date: "2024-01-15"
   author: "Author Name"
   ---
   ```
3. Write your content using Markdown/MDX syntax
4. The page will be automatically available at `/legal/[filename]`

## MDX Features

- **Frontmatter**: YAML metadata at the top of each file
- **Markdown**: Standard markdown syntax
- **React Components**: Use custom components like `<MDXImage>` and `<MDXVideo>`
- **Styling**: Automatic prose styling with Tailwind CSS

## Custom Components

Available custom components in MDX files:
- `<MDXImage src="image.jpg" alt="Description" />`
- `<MDXVideo id="youtube-id" title="Video Title" />`

## File Naming

- Use kebab-case for filenames (e.g., `privacy-policy.mdx`)
- The filename (without `.mdx`) becomes the URL slug
- Example: `privacy-policy.mdx` → `/legal/privacy-policy`
