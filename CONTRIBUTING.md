# Contributing to Think Responsibly Show

## Content Management Guidelines

### Blog Posts and Newsletters

Posts are stored in the `_posts` directory and follow the Jekyll naming convention:
```
YYYY-MM-DD-title-of-post.md
```

#### Important Rules for Content Management:

1. **Never Force Push to Main Branch**
   - Always use regular `git push` instead of `git push -f`
   - Force pushing can overwrite history and lose posts

2. **Proper Git Workflow**
   ```bash
   # Before making changes, always pull latest
   git fetch origin
   git merge origin/main

   # Make your changes
   git add .
   git commit -m "Your descriptive message"

   # Push changes normally
   git push origin main
   ```

3. **Working with Posts**
   - New posts should be added to `_posts/` directory
   - Follow the Jekyll frontmatter format:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   author: "Author Name"
   date: YYYY-MM-DD HH:MM:SS
   description: "Brief description"
   ---
   ```

4. **Newsletter Posts**
   - Add `layout: newsletter` in frontmatter
   - Include newsletter-specific fields:
   ```yaml
   ---
   layout: newsletter
   title: "Newsletter Title"
   newsletter_subject: "Email Subject"
   newsletter_preview: "Preview Text"
   send_time: "immediate" # or scheduled datetime
   ---
   ```

5. **Podcast Episodes**
   - Add `layout: podcast` in frontmatter
   - Include podcast-specific fields:
   ```yaml
   ---
   layout: podcast
   title: "Episode Title"
   episode_number: 1
   duration: "HH:MM:SS"
   audio_url: "URL to audio file"
   ---
   ```

### Development Guidelines

1. **CSS Changes**
   - Use the design system classes from `css/design-system.css`
   - Avoid inline styles
   - Add new utility classes to design system if needed

2. **Template Changes**
   - Edit templates in `_layouts/` directory
   - Test changes with multiple post types

3. **Testing**
   - Always test locally using `jekyll serve`
   - Verify posts appear correctly
   - Check responsive design
   - Test newsletter and podcast functionality

### Deployment Checklist

Before deploying changes:
- [ ] Pull latest changes from main
- [ ] Test locally
- [ ] Verify all posts are present
- [ ] Check design system consistency
- [ ] Ensure no force push is used

### Common Issues

1. **Missing Posts**
   - Usually caused by force pushing
   - Always pull before pushing
   - Use proper git workflow

2. **Broken Styles**
   - Check design system imports
   - Verify class names
   - Test responsive layouts

3. **Newsletter Issues**
   - Verify frontmatter format
   - Check scheduling configuration
   - Test email preview

For any questions or issues, please open a GitHub issue or contact the maintainers.
