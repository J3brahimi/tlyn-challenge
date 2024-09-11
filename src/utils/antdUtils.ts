export const validateMessages = (lang: string) => {
    switch (lang) {
        case "fa":
            return {
                required: "${label} را وارد کنید!",
                types: {
                    email: "${label} وارد شده اشتباه است!",
                    number: "${label} وارد شده معتبر نیست!",
                },
                number: {
                    range: "${label} باید بین ${min} تا ${max} باشد!",
                },
            };
        default:
            return undefined;
    }
};
