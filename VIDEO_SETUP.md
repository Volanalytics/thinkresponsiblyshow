# Video Platform Integration Guide

This guide explains how to set up video publishing to YouTube and Rumble through Zapier webhooks.

## Prerequisites
- Zapier account
- YouTube channel
- Rumble account
- Admin access to both platforms

## YouTube Integration

1. Create YouTube Zap:
   ```
   Trigger: Webhook (Catch Raw Hook)
   Action: YouTube > Upload Video
   ```

2. Configure YouTube Connection:
   - Connect your YouTube channel
   - Grant necessary permissions
   - Verify connection

3. Set Up YouTube Action:
   ```javascript
   Title: {{video.title}}
   Description: {{video.description}}
   Tags: {{video.tags}}
   Privacy: {{video.platforms.youtube.privacy}}
   File: {{video.file}}
   Category: {{video.category}}
   ```

4. Get Webhook URL:
   - Copy the webhook URL from Zapier
   - Add to your config.js:
   ```javascript
   youtubeWebhook: 'your-zapier-webhook-url'
   ```

## Rumble Integration

1. Create Rumble Zap:
   ```
   Trigger: Webhook (Catch Raw Hook)
   Action: Rumble > Upload Video
   ```

2. Configure Rumble Connection:
   - Connect your Rumble account
   - Grant necessary permissions
   - Verify connection

3. Set Up Rumble Action:
   ```javascript
   Title: {{video.title}}
   Description: {{video.description}}
   Tags: {{video.tags}}
   Privacy: {{video.platforms.rumble.privacy}}
   File: {{video.file}}
   Category: {{video.category}}
   ```

4. Get Webhook URL:
   - Copy the webhook URL from Zapier
   - Add to your config.js:
   ```javascript
   rumbleWebhook: 'your-zapier-webhook-url'
   ```

## Testing

1. Create a test video post:
   ```yaml
   ---
   layout: video
   title: "Test Video"
   description: "Testing video upload"
   video:
     platforms:
       youtube:
         enabled: true
         privacy: "unlisted"
       rumble:
         enabled: true
         privacy: "private"
   ---
   ```

2. Upload a small test video
3. Verify it appears on both platforms
4. Check metadata and privacy settings

## Troubleshooting

1. Video Upload Issues:
   - Check file size limits
   - Verify file format compatibility
   - Ensure proper API permissions

2. Webhook Issues:
   - Verify webhook URLs in config.js
   - Check Zapier logs for errors
   - Ensure proper JSON formatting

3. Platform-Specific Issues:
   - YouTube: Check quota limits and API status
   - Rumble: Verify account permissions

## Security Notes

1. Keep webhook URLs secure
2. Use environment variables for sensitive data
3. Regularly rotate API keys
4. Monitor usage and access logs

## Maintenance

1. Regular Tasks:
   - Check API quotas
   - Monitor webhook health
   - Update platform credentials
   - Review access permissions

2. Updates:
   - Keep Zapier integrations updated
   - Monitor platform API changes
   - Update webhook configurations as needed

For additional help, refer to:
- [YouTube API Documentation](https://developers.google.com/youtube/v3)
- [Rumble API Documentation](https://rumble.com/developers)
- [Zapier Help Center](https://zapier.com/help)
