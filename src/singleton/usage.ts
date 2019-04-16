import Singleton from "./Singleton";

export default function() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
        return "Singleton działa, obie zmienne zawierają tą samą instancję";
    } else {
        return "Singleton nie działa. Obie zmienne wskazują rózne instancje";
    }
}
