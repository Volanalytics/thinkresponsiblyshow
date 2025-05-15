# Image Guide for Blog Posts

## Image Upload Location

All images should be uploaded to the `/images/uploads/` directory. This ensures consistent organization and proper referencing across the site.

## How to Add Images to Posts

1. **Upload your image:**
   - Place your image file in the `/images/uploads/` directory
   - Use descriptive file names (e.g., `podcast-episode-1-cover.jpg`)
   - Supported formats: JPG, PNG, GIF, WebP

2. **Reference in your post:**
   ```markdown
   ![Alt text for image]({{ site.baseurl }}/images/uploads/your-image-name.jpg)
   ```

3. **For featured images:**
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   image: "/images/uploads/your-featured-image.jpg"
   ---
   ```

## Image Best Practices

1. **File Size:**
   - Keep images under 500KB when possible
   - Use appropriate compression for web
   - Recommended dimensions: 1200px max width

2. **File Names:**
   - Use lowercase letters
   - Replace spaces with hyphens
   - Include descriptive names (e.g., `think-responsibly-episode-5-cover.jpg`)

3. **Alt Text:**
   - Always include descriptive alt text
   - Make it meaningful for accessibility
   - Example: `![Host discussing media literacy with guest expert]({{ site.baseurl }}/images/uploads/episode-5-interview.jpg)`

## Examples

### Featured Image in Post Header
```yaml
---
layout: post
title: "Understanding Media Literacy"
image: "/images/uploads/media-literacy-guide.jpg"
---
```

### Image Within Post Content
```markdown
Here's an example of our discussion:

![Panel discussion on media literacy]({{ site.baseurl }}/images/uploads/panel-discussion.jpg)

The panel covered several key topics...
```

### Multiple Images in a Post
```markdown
## Key Points from the Episode

![First key point illustration]({{ site.baseurl }}/images/uploads/point-1.jpg)

This point emphasizes...

![Second key point illustration]({{ site.baseurl }}/images/uploads/point-2.jpg)

The second point covers...
```

## Troubleshooting

If your images aren't displaying:

1. Check the file path is correct
2. Verify the image exists in the `/images/uploads/` directory
3. Ensure the file name matches exactly (case-sensitive)
4. Confirm the file format is supported

For additional help, contact the development team or refer to the [SETUP.md](SETUP.md) documentation.
