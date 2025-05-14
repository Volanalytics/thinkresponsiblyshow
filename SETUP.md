# Setup Guide for Think Responsibly Show Blog System

## 1. GitHub Authentication Setup

1. Go to your GitHub repository settings:
   - Navigate to https://github.com/Volanalytics/thinkresponsiblyshow/settings
   - Click on "Settings" > "Developer settings" > "OAuth Apps"
   - Click "New OAuth App"

2. Register the OAuth application:
   - Application name: "Think Responsibly Show CMS"
   - Homepage URL: Your site URL (e.g., https://volanalytics.github.io/thinkresponsiblyshow)
   - Authorization callback URL: Your site URL + /admin/ (e.g., https://volanalytics.github.io/thinkresponsiblyshow/admin/)

3. After registration, you'll receive:
   - Client ID
   - Client Secret

4. Update the admin/config.yml:
```yaml
backend:
  name: github
  repo: Volanalytics/thinkresponsiblyshow
  branch: main
  auth_endpoint: auth
  base_url: https://api.netlify.com
  auth_type: implicit
```

## 2. Zapier Integration Setup

1. Create a Zapier account:
   - Go to https://zapier.com/sign-up
   - Complete the registration process

2. Create a new Zap:
   - Click "Create Zap"
   - Choose "Webhook" as the trigger
   - Select "Catch Hook"
   - Copy the provided webhook URL

3. Update admin/index.html:
   - Replace 'YOUR_ZAPIER_WEBHOOK_URL' with the URL from step 2
   ```javascript
   const webhookUrl = 'YOUR_COPIED_WEBHOOK_URL';
   ```

4. Set up social media actions:
   - Add Twitter action:
     - Choose "Twitter" > "Create Tweet"
     - Map content: {{title}} + URL + {{description}}
   
   - Add Facebook action:
     - Choose "Facebook Pages" > "Create Page Post"
     - Map content fields from the webhook
   
   - Add LinkedIn action:
     - Choose "LinkedIn" > "Share an Update"
     - Map the content appropriately

## 3. Social Media Account Connection

### Twitter Setup
1. In Zapier:
   - Click "Connect Twitter"
   - Authorize your Twitter account
   - Grant necessary permissions

2. Configure post format:
```
📝 New Post: {{title}}

{{description}}

Read more: {{url}}

#ThinkResponsibly #MediaLiteracy
```

### Facebook Setup
1. In Zapier:
   - Click "Connect Facebook"
   - Choose your page
   - Grant posting permissions

2. Configure post format:
```
📚 New on Think Responsibly Show:

{{title}}

{{description}}

Read the full post: {{url}}
```

### LinkedIn Setup
1. In Zapier:
   - Connect LinkedIn account
   - Select company page
   - Grant necessary permissions

2. Configure post format:
```
New article on Think Responsibly Show:

{{title}}

{{description}}

Read more: {{url}}

#MediaLiteracy #CivicEngagement
```

## 4. Testing the Setup

1. Test GitHub Authentication:
   - Go to your site's /admin/ page
   - Try logging in with GitHub
   - Verify you can access the CMS

2. Test Post Creation:
   - Create a test post in the CMS
   - Include social sharing options
   - Publish the post

3. Verify Social Media Integration:
   - Check Zapier task history
   - Verify posts appear on selected platforms
   - Check post formatting and links

## 5. Maintenance

1. Regular checks:
   - Monitor Zapier task history
   - Check GitHub authentication status
   - Verify social media connections

2. Troubleshooting:
   - Check Zapier logs for failed tasks
   - Verify webhook URL is correct
   - Ensure social media tokens haven't expired

## Security Notes

1. Keep your GitHub OAuth credentials secure
2. Regularly rotate access tokens
3. Monitor authorized applications
4. Review social media app permissions regularly

## Support

If you encounter issues:
1. Check Zapier task history for error messages
2. Verify GitHub permissions
3. Test social media connections
4. Review webhook configurations

For technical support, contact the development team through the GitHub repository issues section.
