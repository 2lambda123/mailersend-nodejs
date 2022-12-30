import EmailObject from "../EmailObject";


function send(emailParams) {
  let emailObject = new EmailObject(emailParams)

  return this.request("/email", {
    method: "POST",
    body: emailObject.data
  });
}

function sendBulk(bulkEmails) {
  const emails = bulkEmails.emails;
  bulkEmails.flush();

  return this.request("/bulk-email", {
    method: "POST",
    body: emails
  });
}

function getBulkEmailRequestStatus(params) {
  const { bulk_email_id } = params

  return this.request(`/bulk-email/${bulk_email_id}`, {
    method: "GET"
  });
}