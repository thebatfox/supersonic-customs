export default function PrivacyNotice() {
  return (
    <details className="mt-4 mb-4">
      <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors">
        Click here to view Privacy Notice & Consent Information
      </summary>
      <div className="mt-3 p-4 bg-muted rounded-lg text-sm text-muted-foreground space-y-3">
        <p>
          By submitting this form, you consent to Supersonic Customs collecting and using your personal information (such as your name, email address, and phone number) solely for the purpose of providing you with a quotation or contacting you regarding our acoustic and soundproofing services.
        </p>
        <p>
          Your information will be stored securely and retained only for as long as necessary to fulfil this purpose. We will never share your personal information with any third party without your explicit permission.
        </p>
        <p>
          In accordance with POPIA, you have the right to access, correct, or request the deletion of your personal information at any time, or to withdraw your consent by contacting us at info@supersoniccustoms.com
        </p>
      </div>
    </details>
  );
}
