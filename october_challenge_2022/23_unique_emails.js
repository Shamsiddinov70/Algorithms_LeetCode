var numUniqueEmails = function (emails) {

    let mails = [];
    for (let i = 0; i < emails.length; i++) {

        let at = emails[i].indexOf("@");
        let plus = emails[i].indexOf("+");

        if (emails[i].includes("+")) {
            let firstHalf = emails[i].substring(0, plus).replaceAll(".", "");
            let secondHalf = emails[i].substring(at).replace(".com", "com");
            let merged = firstHalf.concat(secondHalf);
            mails.push(merged);
        }

        if (!emails[i].includes("+")) {
            let firstHalf = emails[i].substring(0, at).replaceAll(".", "");
            let secondHalf = emails[i].substring(at).replace(".com", "com");
            let merged = firstHalf.concat(secondHalf);
            mails.push(merged);
        }
    }

    let uniqueEmails = [];

    for (const m of mails) {
        if (!uniqueEmails.includes(m)) uniqueEmails.push(m);
    }

    return uniqueEmails.length;
};