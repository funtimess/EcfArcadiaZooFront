import Route from "./Route.js";

export const websiteName = "Arcadia Zoo";

export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/services", "Nos Services", "/pages/service/services.html", [], "/js/service/services.js"),
    new Route("/habitats", "Nos Habitats", "/pages/habitat/habitats.html", [], "/js/habitat/habitats.js"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/contact", "Contact", "/pages/contact.html", []),
    new Route("/adminDashboard", "Dashboard Admin", "/pages/admin/dashboard.html", ["admin"], "/js/admin/dashboard.js"),
    new Route("/editService", "Modifier un Service", "/pages/editService.html", ["admin"]),
    new Route("/employeeDashboard", "Dashboard Employé", "/pages/employee/dashboard.html", ["employee"], "/js/employee/dashboard.js"),
    new Route("/vetDashboard", "Dashboard Vétérinaire", "/pages/vet/dashboard.html", ["vet"], "/js/vet/dashboard.js"),
];



