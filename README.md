# Wild Heroes

Nous allons créer une application affichant une liste de super héros.

Pour cela, nous aurons besoin besoin de cette API : [https://akabab.github.io/superhero-api/](https://akabab.github.io/superhero-api/).

## 1. API

Dans le composant `<App />`, appelle l'API afin de récupérer la liste des héros et fait un `console.log` du résultat.

Fait en sorte de n'appeler l'API qu'au montage du composant.

## 2. Liste

Dans ton composant `<App />`, appelle le composant `<HeroesList />` en lui passant en props la liste des héros récupérés de l'API.

Fait un `console.log` des props pour vérifier que tout a bien été reçu.

Dans le jsx de `<HeroesList />`, affiche la liste des noms des héros.

## 3. Détail

Dans ton composant `<HeroesList />`, modifie l'affichage de tes héros afin d'appeler le composant `<HeroesItem />` et en lui passant les informations d'un héros par les props.

Modifie le composant `<HeroesItem />` afin d'afficher quelques informations d'un héros :

- son nom
- son image "xs" si elle existe
- son alignement

## 4. Favoris

Dans ton composant `<HeroesItem />`, ajoute un bouton permettant d'ajouter ou retirer un super héros à tes favoris, qui impactera un état `favourite`.

## 5. Alignement

Dans `<HeroesList />`, ajoute trois boutons avant ta liste :

- All
- Good
- Evil

Lors du clic sur un de ces boutons, un etat "alignment" doit être modifié avec les valeurs correspondantes ("all" par défaut).

Ajouter un filtre sur la liste des héros affiché afin de ne garder que les héros de l'alignement correspondant.

## 6. Détail

Ajoute dans le composant `<App />` la configuration nécessaire à la création des routes suivantes :

- "/" affiche la liste des super héros
- "/heroes/:id" qui affichera le composant `<HeroesDetail />` qui tu vas créer.

En fonction de l'identifiant, le composant `<HeroesDetail />` doit appeler l'API afin d'afficher le nom et les statistiques du héros.

Ajout dans `<HeroesDetail />` un bouton "Back to the list" qui affiche la liste des héros.

## 7. Filtrage

Dans `<HeroesList />`, ajoute un label "Rechercher" et un champs texte, avant la liste.

À la modification du texte du champs, filtrer les héros pour n'afficher que ceux dont le nom correspont à la recherche.

## 8. Collection

Dans `<HeroesList />`, ajoute un boutons "Mes favoris" avant la liste.

Modifie la gestion des favoris afin de permettre de filtrer tes héros afin de n'afficher que tes favoris.
