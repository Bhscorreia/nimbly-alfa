export default function Consent(req, res) {
    res.json({
        data: {
          consentId: "urn:bancoex:C1DD33123",
          creationDateTime: Date().toString(),
          status: "AWAITING_AUTHORISATION",
          statusUpdateDateTime: Date().toString(),
          permissions: [
            "ACCOUNTS_READ",
            "ACCOUNTS_OVERDRAFT_LIMITS_READ",
            "RESOURCES_READ"
          ],
          expirationDateTime: (Date() + 10).toString(),
          transactionFromDateTime: Date().toString(),
          transactionToDateTime: Date().toString()
        },
        "links": {
          "self": "https://api.banco.com.br/open-banking/api/v1/resource",
          "first": "https://api.banco.com.br/open-banking/api/v1/resource",
          "prev": "https://api.banco.com.br/open-banking/api/v1/resource",
          "next": "https://api.banco.com.br/open-banking/api/v1/resource",
          "last": "https://api.banco.com.br/open-banking/api/v1/resource"
        },
        "meta": {
          "totalRecords": 1,
          "totalPages": 1,
          "requestDateTime": Date().toString()
        }
      });
}