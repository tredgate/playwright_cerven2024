import { test } from "@playwright/test";

test("GET request", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/train");
});

test("GET request with parameter", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/eshop", {
    params: {
      userId: 3,
    },
  });
});

test("GET Booking with Header", async ({ request }) => {
  await request.get("https://restful-booker.herokuapp.com/booking", {
    headers: {
      "Accept-Language": "en-US,en;q=0.9,cs-CZ;q=0.8,cs;q=0.7,it;q=0.6",
    },
  });
});

test("POST Request with body", async ({ request }) => {
  await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/register",
    {
      data: {
        email: "test223@example.com",
        username: "user5540058",
        password: "123564",
      },
    }
  );
});

test("Update Booking with authorized request - transfer data", async ({
  request,
}) => {
  const authResponse = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: {
        password: "password123",
        username: "admin",
      },
    }
  );
  const responseBody = await authResponse.json();
  const token = responseBody.token;
  console.log("Token: " + token);
  // * Nastavení proměnných pro Update request
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Cookie: "token=" + token, // ! Použití const token do hlavičky cookie
  };
  const data = {
    firstname: "James",
    lastname: "Brown",
    totalprice: 111,
    depositpaid: true,
    bookingdates: {
      checkin: "2018-01-01",
      checkout: "2019-01-01",
    },
    additionalneeds: "Breakfast",
  };

  // * provolání requestu
  await request.put("https://restful-booker.herokuapp.com/booking/1182", {
    headers: headers, // * použití const headers
    data: data, // * použití const data
  });
});
