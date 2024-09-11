export function validatePhoneEmailInput(inputValue: string) {
  // Regular expressions for email and phone number patterns
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const phoneRegex = /^\d+$/;

  // Check if the input matches the email pattern
  if (emailRegex.test(inputValue)) {
    return "email";
  }

  // Check if the input matches the phone number pattern
  if (phoneRegex.test(inputValue)) {
    return "phone";
  }

  // If neither pattern matches, it's an invalid input
  return "invalid";
}
