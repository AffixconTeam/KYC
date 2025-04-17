import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CopyBlock, dracula } from "react-code-blocks"
import { Info, Webhook } from "lucide-react"

export default function ApiWebhooks() {
  const webhookExample = `{
  "id": "evt_123456789",
  "type": "verification.completed",
  "created": 1619712000,
  "data": {
    "user_id": "usr_987654321",
    "verification_id": "ver_123456789",
    "status": "approved",
    "completed_at": 1619712000,
    "verification_type": "document",
    "document_type": "passport",
    "country": "US"
  }
}`

  const webhookEvents = [
    {
      type: "verification.created",
      description: "Triggered when a new verification is created.",
    },
    {
      type: "verification.pending",
      description: "Triggered when a verification is pending review.",
    },
    {
      type: "verification.completed",
      description: "Triggered when a verification is completed (approved or rejected).",
    },
    {
      type: "verification.approved",
      description: "Triggered when a verification is approved.",
    },
    {
      type: "verification.rejected",
      description: "Triggered when a verification is rejected.",
    },
    {
      type: "document.uploaded",
      description: "Triggered when a document is uploaded.",
    },
    {
      type: "document.verified",
      description: "Triggered when a document is verified.",
    },
    {
      type: "document.rejected",
      description: "Triggered when a document is rejected.",
    },
    {
      type: "user.created",
      description: "Triggered when a new user is created.",
    },
    {
      type: "user.updated",
      description: "Triggered when a user is updated.",
    },
    {
      type: "watchlist.match",
      description: "Triggered when a user matches a watchlist entry.",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Webhooks</h2>
        <p className="text-slate-700 dark:text-slate-300">
          Webhooks allow you to receive real-time notifications about events that happen in your KYC verification
          process. Instead of polling our API for updates, you can configure webhooks to receive notifications when
          events occur.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Webhook className="h-5 w-5" />
            Webhook Setup
          </CardTitle>
          <CardDescription>
            Configure webhooks in your developer dashboard to receive event notifications.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">To set up a webhook:</p>
          <ol className="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-300">
            <li>Go to the Webhooks section in your developer dashboard</li>
            <li>Click "Add Endpoint"</li>
            <li>Enter the URL where you want to receive webhook events</li>
            <li>Select the events you want to subscribe to</li>
            <li>Save your webhook configuration</li>
          </ol>
          <p className="text-slate-700 dark:text-slate-300">
            We will send a POST request to your webhook URL with a JSON payload containing the event data.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Webhook Events</h3>
        <p className="text-slate-700 dark:text-slate-300">
          The following events are available for webhook subscriptions:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-left">
                <th className="p-2 border border-slate-200 dark:border-slate-700">Event Type</th>
                <th className="p-2 border border-slate-200 dark:border-slate-700">Description</th>
              </tr>
            </thead>
            <tbody>
              {webhookEvents.map((event, index) => (
                <tr key={index} className="border-b border-slate-200 dark:border-slate-700">
                  <td className="p-2 border border-slate-200 dark:border-slate-700 font-mono">{event.type}</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-700">{event.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Webhook Payload</h3>
        <p className="text-slate-700 dark:text-slate-300">
          Each webhook event includes a JSON payload with information about the event. Here's an example of a webhook
          payload for a verification.completed event:
        </p>
        <div className="rounded-md overflow-hidden">
          <CopyBlock text={webhookExample} language="json" showLineNumbers={false} theme={dracula} wrapLines />
        </div>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Webhook Security</AlertTitle>
        <AlertDescription>
          To verify that webhook requests are coming from our service, we include a signature in the{" "}
          <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">X-Signature</code> header. You should
          validate this signature before processing the webhook event.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Webhook Retries</h3>
        <p className="text-slate-700 dark:text-slate-300">
          If your webhook endpoint returns a non-2xx response code, we will retry the webhook delivery with an
          exponential backoff:
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
          <li>1st retry: 5 minutes after the initial attempt</li>
          <li>2nd retry: 30 minutes after the 1st retry</li>
          <li>3rd retry: 2 hours after the 2nd retry</li>
          <li>4th retry: 5 hours after the 3rd retry</li>
          <li>5th retry: 10 hours after the 4th retry</li>
        </ul>
        <p className="text-slate-700 dark:text-slate-300">
          After the 5th retry, we will stop attempting to deliver the webhook.
        </p>
      </div>
    </div>
  )
}
