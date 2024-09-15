import Route from "./Route.js";

export const websiteName = "Arcadia Zoo";

export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    
    new Route("/services", "Nos Services", "/pages/services.html",[], "/js/services.js"),
    new Route("/habitats", "Nos Habitats", "/pages/habitats.html", [], "/js/habitats.js"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html",["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html", ["client", "admin"]),
    new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html", ["client", "admin"]),
    new Route("/contact", "Contact", "/pages/contact.html", []),
    new Route("/editService", "Modifier un Service", "/pages/editService.html", ["admin"]),
];




