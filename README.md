# Projet de Webmapping -- M2 GEOMAS 2022/2023
**Auteurs :**
- Gad-Eliezer N'DA
- Jérémy ROUSSEAU

**Problématique :**
Peut-on affirmer que l’artificialisation des sols dans les départements du Rhône et de l'Isère est 4 fois plus rapide que l’augmentation de leur population entre 2006 et 2012 ?

### Bibliothèque et module
Pour la conception de ce site web, nous avons utilisé :
- les modules par défaut ajoutés par la commande `npm create ol-app`
- `ol-popup`
- `ol-ext` pour les légendes
- `ol-layerswitcher`
- `chart.js` pour les graphiques

### Initialiser le dépot Git
1. Se connecter à la VM Ubuntu Dev
2. Ouvrir un terminal dans le dossier Document
3. `git clone https://github.com/m2cci-roussjer/Projet_Webmapping.git`
4. Saisir son pseudo (ex: m2cci-roussjer)
5. Saisir sa clé personnel (voir sur Github : Developer settings/Personal access tokens (classic))
6. Pour récupérer toutes les branches du répertoire : `git fetch --all`
7. Pour vérifier : `git remote -v`
8. `git config user.name "[pseudo GitHub]"`
9. `git config user.email "[email compte GitHub]"` pour vérifier les changements `git config --list`


### Faire des changements (à faire à chaque fin de séance de travail)
1. Vérifier la branche avec `git status`, on ne travaille pas directement sur la branche **MASTER** mais sur **DEVEL**
2. Pour changer de branche : `git checkout [nom]`
3. `git pull` et saisir ses identifiants
4. `git add [fichier]` pour ajouter les fichiers modifiés
5. `git commit -m "[Mon message explicite]"`, il faut mettre un message explicite !!
6. `git push` et saisir ses identifiants

### Lancer le serveur web
1. Ouvrir un terminal dans site_web
2. Saisir `npm start` et lancer l'URL

### Mettre à jour **MASTER**
1. Se connecter à la branche **DEVEL** avec `git checkout devel`
2. `git pull` et saisir ses identifiants
3. Se connecter à la branche **MASTER** avec `git checkout master`
4. `git pull` et saisir ses identifiants
5. `git merge devel` sur la branche **MASTER**
6. `git push` et saisir ses identifiants

### Ajouter une nouvelle branche
1. Se connecter à la branche **MASTER** avec `git checkout master`
2. `git pull` et saisir ses identifiants
3. `git checkout -b [nomDeLaNouvelleBranche]` pour créer une nouvelle branche identique à **MASTER**
4. `git push --set-upstream origin [nomDeLaNouvelleBranche]` pour l'ajouter sur GitHub

### Consigne
  Vous serez évalués sur vos capacités à traiter une problématique d’analyse spatiale, le rendu devant se faire sur la forme de pages web (méthodologie + analyse + commentaire) avec cartographie interactive et graphiques. Donc, à la fois, votre maitrise technique (html + css + openlayers) et votre capacité à traiter des jeux de données, les analyser et en tirer une analyse spatiale.

  La problématique proposée est la suivante : « Peut-on affirmer que l’artificialisation des sols en France est 4 fois plus rapide que l’augmentation de la population ? ». Pour cela, il faudra utiliser les données de Corine Land Cover + INSEE ainsi que se documenter. Documentation thématique —> Qu’entend-on par « artificialisation des sols » ? A vous de choisir les échelles (France, régions, communes etc.), les périodes traitées et les méthodes utilisées (par exemple interpolation des populations des zones urbaines continues et discontinues à partir des populations îlots IRIS ou autre etc.) + documentation technique —> comment charger des polygones avec openlayers etc.


