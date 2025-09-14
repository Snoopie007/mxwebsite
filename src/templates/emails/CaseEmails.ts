const commonHead = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en" dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="x-ticket-id" content="{{case.id}}">`

const commonStyle = `
  <style type="text/css">
    body{margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;color:#333333}
    table,td{border-collapse:collapse}
    img{border:0;height:auto;line-height:100%;outline:none;text-decoration:none}
    p{display:block;margin:16px 0}
    strong{font-weight:600}
  </style>
</head>`

const caseMetadata = `
  <p>
    <strong>Case ID:</strong> #{{case.id}}<br>
    <strong>Subject:</strong> {{case.subject}}<br>
    <strong>Status:</strong>`

const supportHours = `
  <p>Our support team will get back to you shortly, typically within <strong>24–48 business hours</strong>.</p>

  <p>Expect respond times to be vary based on your support package. We are available <strong>Monday to Friday, 9:00 AM – 6:00 PM EST</strong>, and are closed on weekends and public holidays.</p>`

export const CaseClose = `${commonHead}
  <title>Monstro Support Case #{{case.id}}</title>${commonStyle}
<body>
  <!-- Hidden metadata for automated systems -->
  <div style="display:none; visibility:hidden; mso-hide:all; font-size:0; line-height:0; max-height:0; max-width:0; opacity:0;">
    Case-ID: {{case.id}}
  </div>

  <p>Hi {{vendor.firstName}},</p>

  <p>Your support case has been resolved and closed:</p>

  ${caseMetadata} Closed
  </p>

  <p>If you need further assistance or if this issue recurs, please feel free to open a new support case and we'll be happy to help.</p>

  <p> 
    Best regards,<br>
    {{agent.firstName}} {{agent.lastName}}<br>
    Monstro Support Team<br>
    <span style="">{{agent.firstName | lowercase}}@support.mymonstroapp.com</span>
  </p>

  <p style="color: #666666; font-size: 14px; margin-top: 30px;">
    This is an automated message regarding your support request. Please do not remove the subject line when replying, so we can track your case properly.
  </p>
</body>
</html>
`

export const SupportConfirmation = `${commonHead}
  <title>Support Ticket</title>${commonStyle}
<body style="padding-right: 20px;">
  <p>Hi {{vendor.firstName}},</p>

  <p>We've received your support request and created a case:</p>

  ${caseMetadata} {{case.status}}
  </p>

  ${supportHours}

  <p>Feel free to reply to this message if you have any updates or additional details to provide.</p>

  <p>
    Best regards,<br>
    Monstro Support Team<br>
    support@mymonstro.com
  </p>

  <p style="color: #666666; font-size: 14px; margin-top: 30px;">
    This is an automated message. Please do not reply directly to this email.
  </p>
</body>
</html>
`

export const ReopenCase = `${commonHead}
  <title>Monstro Support Case #{{case.id}}</title>${commonStyle}
<body>
  <!-- Hidden metadata for automated systems -->
  <div style="display:none; visibility:hidden; mso-hide:all; font-size:0; line-height:0; max-height:0; max-width:0; opacity:0;">
    Case-ID: {{case.id}}
  </div>

  <p>Hi {{vendor.firstName}},</p>

  <p>Your support case has been reopened:</p>

  ${caseMetadata} Closed
  </p>

  ${supportHours}

  <p> 
    Best regards,<br>
    {{agent.firstName}} {{agent.lastName}}<br>
    Monstro Support Team<br>
    <span style="">{{agent.firstName | lowercase}}@support.mymonstroapp.com</span>
  </p>

  <p style="color: #666666; font-size: 14px; margin-top: 30px;">
    This is an automated message regarding your support request. Please do not remove the subject line when replying, so we can track your case properly.
  </p>
</body>
</html>
`