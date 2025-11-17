# 🗓️ Public Holidays Finder (ASP.NET Core MVC – Part I)

A simple and clean **ASP.NET Core MVC** web application that fetches and displays **public holidays** for any country and year using a free public API.

## 🧭 Overview

This project demonstrates how to:

✔ Build an ASP.NET Core MVC application  
✔ Call a REST API using HttpClient  
✔ Deserialize JSON responses  
✔ Display data in Razor views  
✔ Handle user inputs and errors gracefully  

---

## ⚙️ Prerequisites

- .NET 6+
- Git
- GitHub Codespaces or Visual Studio / VS Code
- Internet connection (API calls)

---

## 🚀 Getting Started

### Clone
```sh
git clone https://github.com/mayurjainf007/PublicHolidaysApp.git
cd PublicHolidaysApp
```

### Restore & Run
```sh
dotnet restore
dotnet build
dotnet run
```

---

## 🌐 How to Use

1. Enter country code (US, IN, CA, etc.)
2. Enter year (2023, 2024, etc.)
3. Submit and view holidays

---

## 🧩 Project Structure

```
PublicHolidaysApp/
├── Controllers/
│   └── HomeController.cs
├── Models/
│   └── HolidayModel.cs
├── Service/
│   └── HolidaysApiService.cs
├── Views/
│   └── Home/
│       └── Index.cshtml
├── wwwroot/
├── appsettings.json
├── Program.cs
└── README.md
```

---

## 📦 API Used

**Nager.Date Public Holidays API**

```
https://date.nager.at/api/v3/PublicHolidays/{year}/{countryCode}
```

---

## 🧠 Key Features

- Real-time API data  
- Clean MVC architecture  
- Error handling  
- Razor-based UI  

---

## 🧰 Technologies Used

- C#
- ASP.NET Core MVC
- Razor Views
- REST API
- JSON
- GitHub Codespaces

---

## 🚧 Future Enhancements

- Add caching & search history  
- Add React/Angular frontend  
- Add auth & roles  
- Add unit tests  

---

## 🧑‍💻 Author

**Mayur Jain**  
_Data & Cloud Engineer_  
