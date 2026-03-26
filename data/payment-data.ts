// data/payment-data.ts

export interface BankInfo {
  name: string;
  accountName: string;
  accountNumber: string;
  qrCodeUrl: string;
}

export const paymentData: BankInfo[] = [
  {
    name: "CBE",
    accountName: "Destiny Addis Hotel PVT.LTD.CO",
    accountNumber: "1000230562753",
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=1000230562753"
  },
  {
    name: "NIB International Bank",
    accountName: "Destiny Addis Hotel PVT.LTD.CO",
    accountNumber: "7000001116504",
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=7000001116504"
  }
];

// Telegram link using phone number (no username needed)
export const telegramLink = "https://t.me/+251911202904?text=I%20have%20made%20a%20payment%20to%20Destiny%20Addis%20Hotel.%20Please%20find%20my%20receipt%20attached.";

// Payment instructions for users
export const paymentInstructions = {
  title: "Payment Instructions",
  steps: [
    "1. Choose your preferred bank from the options above",
    "2. Transfer the exact amount to the provided account number",
    "3. Take a screenshot of the payment receipt or transaction confirmation",
    "4. Click the 'Send Receipt' button to open Telegram",
    "5. Attach the screenshot and send it to us for verification",
    "6. Wait for confirmation (usually within 30 minutes)"
  ],
  verificationTime: "within 30 minutes",
  supportHours: "9:00 AM - 10:00 PM (Daily)"
};

// Contact information for payment support
export const paymentSupport = {
  telegram: "https://t.me/+251911202904",
  telegramPhone: "+251911202904",
  phone: "+251911202904",
  email: "info@destinyaddis.com"
};