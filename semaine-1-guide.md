# Semaine 1 — Ta première page web qui parle à une vraie API

Bonjour Soufiane, et bienvenue chez French Dev ! 👋

French Dev, c'est notre société à Marrakech. Ici, on développe surtout les logiciels d'Eat & Collect, notre société en France. C'est pour ça que tu verras souvent « eatandcollect » dans les adresses.

Cette semaine, tu vas :
1. installer tes outils ;
2. créer une page web avec HTML, CSS et JavaScript ;
3. afficher le **vrai menu** d'un restaurant, avec nos données ;
4. sauvegarder ton travail avec Git.

Vendredi, tu montres ta page à Jamal.

---

## Comment lire ce guide

- Lis **dans l'ordre**. Ne saute pas d'étape.
- Les blocs gris contiennent le code des leçons. Tu peux les **copier-coller**.
- Pour les petits exemples, essaie plutôt de **retaper le code à la main** : c'est comme ça qu'on le retient.
- Les **exercices**, tu les écris **toi-même**, sans copier.
- Mais après avoir collé, **lis chaque ligne**. Tu dois comprendre ce qu'elle fait.
- Les lignes avec une barre à gauche sont en arabe. Elles réexpliquent une idée difficile.

> هذا الدليل مكتوب بلغة بسيطة. عندما تكون فكرة صعبة، ستجد شرحًا إضافيًا بالعربية مثل هذا السطر.

### La règle d'or avec l'IA

Pendant les premières semaines, **tu écris ton code toi-même**. C'est comme ça qu'on apprend à coder.

L'IA a un seul rôle : c'est **un assistant à qui tu poses des questions**, dans un chat.
- ✅ Tu peux lui demander d'**expliquer** : un mot, une ligne de code, un message d'erreur.
- ❌ Tu ne lui demandes **pas** d'écrire le code d'un exercice à ta place.
- ❌ Tu n'utilises **pas** d'IA qui écrit dans tes fichiers, comme Copilot dans VS Code.
- Vendredi, Jamal te demande d'expliquer ton code **sans l'IA**.

Exemples de bonnes questions à poser à l'IA :

```text
Explique-moi ce code ligne par ligne, en français très simple.
```

```text
J'ai cette erreur. Explique-moi ce qu'elle veut dire, sans me donner la correction.
```

Exemple de **mauvaise** question :

```text
Écris-moi le code de l'exercice.
```

> الذكاء الاصطناعي هنا أستاذ تسأله عندما لا تفهم، وليس زميلًا يكتب الكود مكانك.

> أنت تتعلم البرمجة فقط عندما تكتب الكود بيدك، وتخطئ، ثم تصحّح خطأك بنفسك.

---

## Jour 1 — Installer les outils

### 1.1 Google Chrome

C'est le navigateur qu'on utilise pour tester.
- Va sur <https://www.google.com/chrome/> et installe-le.

### 1.2 Visual Studio Code (VS Code)

C'est **l'éditeur de code**. C'est là que tu écris tes fichiers.
- Va sur <https://code.visualstudio.com/> et installe-le.
- Pendant l'installation, coche **« Ajouter à PATH »** et **« Ouvrir avec Code »** si on te le propose.

Ensuite, installe des **extensions**. Une extension ajoute une fonction à VS Code.
1. Ouvre VS Code.
2. À gauche, clique sur l'icône des 4 petits carrés : c'est **Extensions**.
3. Cherche et installe :
   - **French Language Pack for Visual Studio Code** : VS Code en français. Redémarre VS Code après.
   - **Live Server**, de Ritwick Dey : pour voir ta page dans Chrome.
   - **Prettier - Code formatter** : pour ranger ton code proprement.

Active l'enregistrement automatique :
- Menu **Fichier** → coche **Enregistrement automatique**.

### 1.3 Git

Git sert à **sauvegarder l'historique** de ton code. On l'explique en détail au point 1.5.
- Va sur <https://git-scm.com/download/win> et installe-le.
- Pendant l'installation, garde les choix par défaut.
- Seul changement : à l'écran « Choosing the default editor », choisis **Visual Studio Code**.

### 1.4 Vérifier que tout marche

On va utiliser le **terminal** pour la première fois. Le terminal, c'est une fenêtre où tu écris des ordres à l'ordinateur. On l'étudie bien la semaine 2. Aujourd'hui, juste 3 commandes.

1. Dans VS Code : menu **Terminal** → **Nouveau terminal**.
2. Une fenêtre s'ouvre en bas. Tape cette commande, puis appuie sur **Entrée** :

```powershell
git --version
```

Tu dois voir quelque chose comme `git version 2.47.1.windows.1`. Le numéro peut changer, ce n'est pas grave.

Maintenant, dis à Git qui tu es. Remplace par ton vrai nom :

```powershell
git config --global user.name "Soufiane Nom"
```

Et par ton vrai e-mail :

```powershell
git config --global user.email "ton.email@exemple.com"
```

Ces deux commandes n'affichent aucun message. C'est normal : pas de message = pas d'erreur.

### 1.5 Comprendre Git

Imagine que tu écris un long devoir. Tu fais des sauvegardes : « version 1 », « version 2 », « version finale »… Git fait ça, mais de façon propre et organisée.

Les 4 mots à connaître :

| Mot | Ce que ça veut dire |
|---|---|
| **Dépôt** (repository) | Le dossier de ton projet, surveillé par Git. |
| **Commit** | Une sauvegarde, avec un petit message qui dit ce que tu as changé. |
| **Push** | Envoyer tes commits sur GitLab, sur Internet. |
| **GitLab** | Le site où on garde les projets de l'entreprise. Jamal peut y voir ton travail. |

> تخيّل أن «جيت» مثل حفظ اللعبة في ألعاب الفيديو: كل مرة تحفظ، يمكنك الرجوع إلى تلك النقطة إذا أخطأت.

> الحفظ يبقى في حاسوبك فقط. الإرسال ينقل هذه الحفظات إلى موقع «غيت لاب» حتى يراها جمال، ولا تضيع إذا تعطّل حاسوبك.

### 1.6 Demander ton projet GitLab à Jamal

Tu ne crées pas le projet toi-même. C'est Jamal qui le crée.

1. Crée ton compte GitLab à l'adresse que Jamal t'indique.
2. Envoie ce message à Jamal :

```text
Salut Jamal, j'ai créé mon compte GitLab. Mon nom d'utilisateur est : ________.
Est-ce que tu peux me créer le projet "stage-soufiane" et me donner l'accès, s'il te plaît ?
```

3. Jamal te donne une **adresse** qui ressemble à `https://.../stage-soufiane.git`.

### 1.7 Récupérer le projet sur ton ordinateur

Dans le terminal de VS Code, tape ces commandes **une par une**.

Aller à la racine du disque C :

```powershell
cd C:\
```

Créer un dossier `stage` :

```powershell
mkdir stage
```

Entrer dans ce dossier :

```powershell
cd stage
```

Copier le projet GitLab sur ton ordinateur. Remplace l'adresse par celle de Jamal :

```powershell
git clone https://ADRESSE-DONNEE-PAR-JAMAL/stage-soufiane.git
```

Si Git ouvre une fenêtre pour te connecter, connecte-toi avec ton compte GitLab. Si on te demande un mot de passe et que ça ne marche pas, demande à Jamal : il faut peut-être un « token ».

Ouvrir le projet dans VS Code :

```powershell
code stage-soufiane
```

Une nouvelle fenêtre VS Code s'ouvre. **Travaille toujours dans cette fenêtre.**

Dans ce projet, crée un dossier `semaine-1` : clic droit dans l'explorateur à gauche → **Nouveau dossier**.

### ✅ Fin du jour 1

- [ ] Chrome, VS Code et Git sont installés.
- [ ] `git --version` affiche un numéro.
- [ ] Le projet `stage-soufiane` est ouvert dans VS Code.

---

## Jour 2 — HTML : le squelette de la page

### 2.1 C'est quoi HTML, CSS et JavaScript ?

Une page web est faite de 3 langages. Chacun a un rôle :

| Langage | Rôle | Comparaison avec une maison |
|---|---|---|
| **HTML** | Le contenu : titres, textes, images, boutons. | Les murs et les pièces. |
| **CSS** | Le style : couleurs, tailles, positions. | La peinture et la décoration. |
| **JavaScript** | Le comportement : ce qui bouge, ce qui réagit. | L'électricité. |

> صفحة الويب مثل منزل: لغة «إتش تي إم إل» هي الجدران والغرف، ولغة «سي إس إس» هي الطلاء والديكور، ولغة «جافاسكريبت» هي الكهرباء التي تجعل الأشياء تتحرك.

### 2.2 Les balises

HTML utilise des **balises**. Une balise s'ouvre et se ferme :

```html
<h1>Ceci est un grand titre</h1>
```

- `<h1>` ouvre la balise.
- `</h1>` ferme la balise. Il y a un `/`.
- Le texte entre les deux est le contenu.

Les balises les plus utiles :

| Balise | Utilité |
|---|---|
| `<h1>` à `<h6>` | Titres, du plus grand au plus petit |
| `<p>` | Un paragraphe de texte |
| `<div>` | Une boîte pour regrouper des éléments |
| `<span>` | Un petit morceau de texte dans une ligne |
| `<img>` | Une image. Elle ne se ferme pas. |
| `<button>` | Un bouton |
| `<strong>` | Texte en gras |

Une balise peut avoir des **attributs**. Ce sont des informations en plus :

```html
<p id="telephone" class="info">01 86 86 11 86</p>
```

- `id="telephone"` : un **nom unique** pour cet élément. Aucun autre élément n'a le même id. On l'utilisera jeudi avec JavaScript.
- `class="info"` : un **nom de groupe**. Plusieurs éléments peuvent avoir la même classe. On l'utilise demain avec le CSS.

> المعرّف اسم فريد لعنصر واحد فقط، مثل رقم بطاقة التعريف. أما الصنف فهو اسم مجموعة، مثل «تلاميذ القسم الأول»، ويمكن أن يحمله عدة عناصر.

### 2.3 Ta première page

Dans le dossier `semaine-1`, crée un fichier `index.html`. Colle ce code :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fiche restaurant</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header class="entete">
    <h1 id="nom">Pizza Soufiane</h1>
    <p id="statut" class="badge">Ouvert</p>
  </header>

  <main>
    <section class="infos">
      <h2>Informations</h2>
      <p>📍 <span id="adresse">12 rue de la Paix, Casablanca</span></p>
      <p>📞 <span id="telephone">06 00 00 00 00</span></p>
    </section>

    <section>
      <h2>Le menu</h2>
      <div id="menu">

        <h2 class="titre-famille">NOS PIZZAS</h2>
        <div class="grille">
          <div class="carte">
            <h3>Margherita</h3>
            <p>Sauce tomate, mozzarella, basilic</p>
            <strong class="prix">9,00 €</strong>
          </div>
          <div class="carte">
            <h3>Reine</h3>
            <p>Sauce tomate, mozzarella, jambon, champignons</p>
            <strong class="prix">11,00 €</strong>
          </div>
        </div>

      </div>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

Ce que font les parties principales :

| Partie | Explication |
|---|---|
| `<!DOCTYPE html>` | Dit au navigateur : « ce fichier est une page HTML ». |
| `<head>` | Les réglages de la page. Ils ne s'affichent pas. |
| `<meta charset="UTF-8">` | Permet d'afficher les accents : é, è, à. |
| `<title>` | Le texte dans l'onglet de Chrome. |
| `<link rel="stylesheet" href="style.css">` | Relie la page au fichier CSS. On le crée demain. |
| `<body>` | Tout ce qui s'affiche à l'écran. |
| `<script src="script.js">` | Relie la page au fichier JavaScript. On le crée jeudi. |

### 2.4 Voir ta page dans Chrome

1. Dans VS Code, fais un clic droit sur `index.html`.
2. Clique sur **Open with Live Server**.
3. Chrome s'ouvre à une adresse comme `http://127.0.0.1:5500/semaine-1/index.html`.

Live Server recharge la page **tout seul** à chaque modification. Essaie : change « Pizza Soufiane » par un autre nom, et regarde Chrome.

> «لايف سيرفر» يفتح صفحتك في المتصفح ويعيد تحميلها تلقائيًا كلما غيّرت شيئًا في الملف. لا تحتاج أن تضغط على زر التحديث.

### 2.5 Exercice

Ajoute toi-même, sans copier ce guide :
- une troisième pizza dans la famille « NOS PIZZAS » ;
- une nouvelle famille « NOS BOISSONS » avec 2 boissons.

Astuce : copie un bloc `<div class="carte">…</div>` de ta page et change le texte.

### 2.6 Ton premier commit

À la fin de chaque journée, tu sauvegardes avec Git. Dans le terminal, va d'abord dans le projet :

```powershell
cd C:\stage\stage-soufiane
```

Voir ce qui a changé :

```powershell
git status
```

Les fichiers en **rouge** sont modifiés, mais pas encore préparés pour la sauvegarde.

Préparer tous les fichiers :

```powershell
git add .
```

Le point `.` veut dire « tout le dossier ».

Créer la sauvegarde, avec un message clair :

```powershell
git commit -m "Jour 2 : ma première page HTML"
```

Envoyer sur GitLab :

```powershell
git push
```

Va sur GitLab dans ton navigateur : tu dois voir ton fichier `index.html`. 🎉

> الخطوات دائمًا بنفس الترتيب: نرى ما تغيّر، ثم نجهّز الملفات، ثم نحفظ مع رسالة تشرح ما فعلناه، ثم نرسل إلى الموقع.

### ✅ Fin du jour 2

- [ ] Ma page s'affiche dans Chrome avec Live Server.
- [ ] J'ai ajouté une pizza et une famille de boissons.
- [ ] Mon code est sur GitLab.

---

## Jour 3 — CSS : rendre la page belle

### 3.1 Comment marche le CSS

Une règle CSS a 3 parties :

```css
.carte {
  background: white;
  padding: 12px;
}
```

| Partie | Exemple | Explication |
|---|---|---|
| **Sélecteur** | `.carte` | **Qui** on modifie. Le point veut dire « les éléments avec `class="carte"` ». |
| **Propriété** | `background` | **Quoi** on modifie : ici le fond. |
| **Valeur** | `white` | **Comment** : ici en blanc. |

Les sélecteurs à connaître :

| Sélecteur | Cible |
|---|---|
| `body` | La balise `<body>` |
| `.carte` | Tous les éléments avec `class="carte"` |
| `#nom` | L'élément avec `id="nom"` |
| `.carte img` | Les images **à l'intérieur** d'une carte |

> القاعدة في «سي إس إس» تقول: اختر هذه العناصر، ثم غيّر فيها هذه الخاصية، بهذه القيمة.

### 3.2 Ton fichier CSS

Dans `semaine-1`, crée un fichier `style.css`. Colle ce code :

```css
/* Ceci est un commentaire : le navigateur l'ignore. */

/* Les tailles incluent les bordures : c'est plus simple à calculer. */
* {
  box-sizing: border-box;
}

/* Toute la page */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  color: #222222;
}

/* Le bandeau rouge en haut */
.entete {
  background: #e63946;
  color: white;
  padding: 24px;
  text-align: center;
}

/* La petite étiquette "Ouvert" */
.badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  background: white;
  color: #e63946;
  font-weight: bold;
}

/* Quand le restaurant est fermé : on s'en sert vendredi */
.badge.ferme {
  background: #333333;
  color: white;
}

/* Le contenu principal, centré, pas trop large */
main {
  max-width: 1000px;
  margin: 0 auto;
  padding: 16px;
}

/* La boîte des informations */
.infos {
  background: white;
  padding: 16px;
  border-radius: 12px;
}

.titre-famille {
  margin-top: 32px;
}

/* La grille qui range les cartes en colonnes */
.grille {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}

/* Une carte produit */
.carte {
  background: white;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.carte img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
}

.carte h3 {
  font-size: 16px;
  margin: 8px 0 4px;
}

.carte p {
  font-size: 13px;
  color: #666666;
}

.prix {
  color: #e63946;
  font-size: 18px;
}
```

Regarde Chrome : la page a changé ! Le lien avec le HTML se fait grâce à la ligne `<link rel="stylesheet" href="style.css">` d'hier.

### 3.3 Les propriétés importantes

| Propriété | Ce qu'elle fait |
|---|---|
| `color` | Couleur du texte |
| `background` | Couleur du fond |
| `padding` | Espace **à l'intérieur** de la boîte |
| `margin` | Espace **à l'extérieur** de la boîte |
| `border-radius` | Coins arrondis |
| `font-size` | Taille du texte |
| `display: grid` | Range les éléments enfants en grille |

> المسافة الداخلية هي الفراغ بين حافة العلبة ومحتواها. المسافة الخارجية هي الفراغ بين العلبة والعلب الأخرى من حولها.

Les couleurs comme `#e63946` sont des codes. Pour en choisir une, cherche « color picker » sur Google.

### 3.4 L'outil secret : l'inspecteur de Chrome

1. Dans Chrome, fais un clic droit sur une carte → **Inspecter**.
2. Sur le côté, tu vois le CSS de l'élément.
3. Tu peux changer une valeur **en direct** pour tester. Ce n'est pas sauvegardé : quand le résultat te plaît, recopie la valeur dans `style.css`.

### 3.5 Exercices

1. Change la couleur rouge `#e63946` par la couleur de ton choix, partout dans le fichier.
2. Quand la souris passe sur une carte, elle doit se soulever un peu. Ajoute à la fin de `style.css` :

```css
.carte:hover {
  transform: translateY(-4px);
}
```

   `:hover` veut dire « quand la souris est dessus ».

3. Ajoute une transition douce à ce hover. Tu peux demander à l'IA **ce que fait** la propriété `transition`, puis tu écris le code toi-même.

### ✅ Fin du jour 3

- [ ] Ma page a des couleurs, des cartes et une grille.
- [ ] Je sais utiliser « Inspecter » dans Chrome.
- [ ] Commit et push faits, avec le message `"Jour 3 : CSS"`.

---

## Jour 4 — JavaScript : rendre la page vivante

### 4.1 La console de Chrome

Avant d'écrire du JavaScript, il faut connaître **la console de Chrome**. C'est là que JavaScript écrit ses messages et ses erreurs.

- Dans Chrome, appuie sur **F12**, puis clique sur l'onglet **Console**.

Garde-la **toujours ouverte** quand tu codes en JavaScript. Si quelque chose ne marche pas, la réponse est souvent écrite en rouge dans la console.

### 4.2 Ton premier JavaScript

Dans `semaine-1`, crée `script.js`. Colle :

```javascript
console.log("Bonjour depuis JavaScript !");
```

Regarde la console de Chrome : ton message apparaît.

`console.log(...)` affiche quelque chose dans la console. C'est l'outil numéro 1 pour comprendre ce qui se passe.

### 4.3 Les variables

Une variable est une **boîte avec un nom**. On met une valeur dedans.

```javascript
let compteur = 0;
const prenom = "Soufiane";

compteur = compteur + 1;
console.log(prenom, compteur);
```

| Mot | Explication |
|---|---|
| `let` | Une boîte dont on **peut changer** le contenu plus tard. |
| `const` | Une boîte dont le contenu **ne change pas**. |
| `"Soufiane"` | Un texte. On l'écrit entre guillemets. |
| `0` | Un nombre. Sans guillemets. |

> المتغيّر مثل علبة عليها اسم. تضع فيها قيمة، ويمكنك أن تغيّر ما بداخلها لاحقًا إذا كانت من النوع القابل للتغيير.

### 4.4 Les fonctions

Une fonction est un **morceau de code avec un nom**. On l'écrit une fois, on l'utilise plusieurs fois.

```javascript
function direBonjour(personne) {
  return "Bonjour " + personne + " !";
}

console.log(direBonjour("Soufiane"));
console.log(direBonjour("Jamal"));
```

- `personne` est un **paramètre** : la valeur qu'on donne à la fonction.
- `return` renvoie le résultat.

> الدالة مثل وصفة طبخ: تكتبها مرة واحدة، ثم تستعملها كلما احتجت إليها. المكوّنات التي تعطيها لها تتغيّر، والطريقة تبقى نفسها.

### 4.5 Les conditions

```javascript
const heure = 15;

if (heure >= 11 && heure < 23) {
  console.log("Le restaurant est ouvert");
} else {
  console.log("Le restaurant est fermé");
}
```

- `if` veut dire « si ».
- `else` veut dire « sinon ».
- `&&` veut dire « et ».

### 4.6 Modifier la page avec JavaScript

JavaScript peut **trouver un élément** de la page et **changer son texte**. C'est là que les `id` servent.

Remplace tout le contenu de `script.js` par :

```javascript
console.log("Bonjour depuis JavaScript !");

// On trouve le titre grâce à son id "nom"
const titre = document.getElementById("nom");

// On change son texte
titre.textContent = "Pizza modifiée par JavaScript";
```

Regarde Chrome : le titre a changé, sans toucher au HTML !

> الصفحة المعروضة في المتصفح مثل شجرة من العناصر. «جافاسكريبت» يستطيع أن يجد عنصرًا في هذه الشجرة باسمه الفريد، ثم يغيّر نصّه.

### 4.7 Réagir à un clic

Dans `index.html`, juste après la ligne `<p id="statut" class="badge">Ouvert</p>`, ajoute :

```html
<button id="bouton">Clique-moi</button>
<p id="message"></p>
```

Dans `script.js`, ajoute à la fin :

```javascript
let nombreDeClics = 0;
const bouton = document.getElementById("bouton");
const message = document.getElementById("message");

bouton.addEventListener("click", function () {
  nombreDeClics = nombreDeClics + 1;
  message.textContent = "Tu as cliqué " + nombreDeClics + " fois";
});
```

`addEventListener("click", ...)` veut dire : « quand on clique sur le bouton, exécute cette fonction ».

> هنا نقول للمتصفح: راقب هذا الزر، وكلما ضغط عليه أحد، نفّذ هذه التعليمات.

### 4.8 Exercice

Ajoute un deuxième bouton « Remettre à zéro ». Quand on clique dessus, le compteur revient à 0 et le message affiche « Compteur remis à zéro ».

### ✅ Fin du jour 4

- [ ] J'ouvre la console avec F12 et je lis les messages.
- [ ] Je sais expliquer : variable, fonction, condition, `getElementById`.
- [ ] Mon bouton compte les clics.
- [ ] Commit et push faits.

---

## Jour 5 — Afficher le vrai menu grâce à notre API 🍕

Aujourd'hui, c'est le jour le plus fun. Ta page va afficher le **vrai menu** d'un restaurant, avec les données de notre serveur de test.

Avant de commencer, supprime le bouton et le message du jour 4 dans `index.html`. On n'en a plus besoin.

### 5.1 C'est quoi une API ?

Une API est une **adresse web qui renvoie des données**, au lieu d'une jolie page.

Ta page demande : « donne-moi le menu du restaurant ». L'API répond avec les données. Ta page les affiche.

> الواجهة البرمجية مثل النادل في المطعم: أنت تطلب منه شيئًا، هو يذهب إلى المطبخ، ثم يرجع لك بما طلبت. أنت لا تدخل المطبخ أبدًا.

Nos informations :

| Information | Valeur |
|---|---|
| Adresse de notre API de test | `https://appdev.eatandcollect.fr/api/v3` |
| Restaurant de test | **BEST PIZZA**, aux Mureaux |
| Son « domain » | `dev.eatandcollect.fr` |

Le **domain** sert à dire à l'API **quel restaurant** on veut. Chaque restaurant a le sien.

⚠️ C'est un serveur de **test**. Ici, on ne fait **que lire** des données. Tu ne peux rien casser.

### 5.2 Regarder les données dans Chrome

Avant de coder, regarde ce que l'API renvoie. Ouvre ces adresses dans un nouvel onglet de Chrome.

Les informations du restaurant :

```text
https://appdev.eatandcollect.fr/api/v3/restaurant/dev.eatandcollect.fr
```

Le menu :

```text
https://appdev.eatandcollect.fr/api/v3/products/dev.eatandcollect.fr
```

Tu vois beaucoup de texte avec des `{ }` et des `[ ]`. Si Chrome propose **« Impression élégante »** en haut, coche-la : c'est plus lisible.

### 5.3 Comprendre le JSON

Ce format s'appelle **JSON**. C'est une façon d'écrire des données bien rangées.

```json
{
  "name": "BEST PIZZA",
  "phone": "01 86 86 11 86",
  "is_open": true,
  "specialities": ["Pizza", "Burger", "Tacos"]
}
```

| Symbole | Veut dire | Exemple |
|---|---|---|
| `{ }` | Un **objet** : une fiche avec des cases qui ont un nom | la fiche du restaurant |
| `"name": "BEST PIZZA"` | Une case : son **nom**, puis sa **valeur** | le nom du restaurant |
| `[ ]` | Une **liste** d'éléments | la liste des spécialités |
| `true` ou `false` | Vrai ou faux | le restaurant est ouvert ou non |

> «جيسون» طريقة لكتابة المعلومات بشكل منظم، مثل بطاقة فيها خانات: الاسم، الهاتف، العنوان. الأقواس المعقوفة تعني بطاقة واحدة، والأقواس المربعة تعني قائمة من عدة أشياء.

Le menu a cette forme. C'est une **liste de familles**. Chaque famille contient une **liste de produits**, dans la case `menu_list` :

```json
[
  {
    "name": "NOS BURGERS",
    "menu_list": [
      {
        "name": "CHEVRE MIEL",
        "description": "Salade, Chèvre, Mayonnaise, Steak, Miel",
        "image": "https://appdev.eatandcollect.fr/menu/1688937734-chevre-miel.png",
        "price": "4.9"
      }
    ]
  }
]
```

### 5.4 Première étape : récupérer le restaurant

Remplace **tout** le contenu de `script.js` par ce code :

```javascript
// L'adresse de notre API de test
const API = "https://appdev.eatandcollect.fr/api/v3";

// Le domain du restaurant BEST PIZZA
const DOMAINE = "dev.eatandcollect.fr";

async function chargerRestaurant() {
  // 1. On demande les données à l'API
  const reponse = await fetch(API + "/restaurant/" + DOMAINE);

  // 2. On transforme la réponse JSON en objet JavaScript
  const restaurant = await reponse.json();

  // 3. On regarde ce qu'on a reçu dans la console
  console.log("Restaurant reçu :", restaurant);
}

chargerRestaurant();
```

Ouvre la console avec F12. Tu vois « Restaurant reçu : » suivi d'un objet. Clique sur la petite flèche pour l'ouvrir et explorer les cases. 🎉

**Tu viens de récupérer des données d'un vrai serveur !**

Les mots nouveaux :

| Mot | Explication |
|---|---|
| `fetch(adresse)` | Envoie une demande à cette adresse. « Fetch » veut dire « aller chercher ». |
| `async` | Dit que cette fonction contient des attentes. |
| `await` | « Attends la réponse avant de passer à la ligne suivante. » |
| `reponse.json()` | Transforme le texte JSON en objet que JavaScript comprend. |

Pourquoi attendre ? Parce que le serveur est loin. La réponse met un peu de temps à arriver. Sans `await`, JavaScript continuerait sans avoir les données.

> عندما نطلب معلومات من الخادم، الجواب لا يصل فورًا، لأن الخادم بعيد. كلمة الانتظار تعني: «قف هنا حتى يصل الجواب، ثم أكمل السطر التالي». والكلمة التي نضعها قبل الدالة تعني: «هذه الدالة فيها انتظار».

**Bonus pour s'amuser :** dans Chrome, F12 → onglet **Réseau**. Recharge la page. Tu vois la demande partir vers `appdev.eatandcollect.fr`. Clique dessus, puis sur **Réponse** : ce sont les données brutes.

### 5.5 Deuxième étape : afficher le restaurant dans la page

Dans la fonction `chargerRestaurant`, **juste après** la ligne `console.log(...)`, ajoute :

```javascript
  // 4. On met les données dans la page, grâce aux id
  document.getElementById("nom").textContent = restaurant.name;
  document.getElementById("adresse").textContent =
    restaurant.address + ", " + restaurant.pincode + " " + restaurant.city;
  document.getElementById("telephone").textContent = restaurant.phone;

  // 5. Ouvert ou fermé ?
  const statut = document.getElementById("statut");
  if (restaurant.is_open) {
    statut.textContent = "Ouvert";
  } else {
    statut.textContent = "Fermé";
    statut.classList.add("ferme");
  }
```

Regarde ta page : le nom, l'adresse et le téléphone de **BEST PIZZA** remplacent tes textes !

`restaurant.name` veut dire : « dans l'objet `restaurant`, prends la case `name` ».

### 5.6 Troisième étape : afficher le vrai menu

Ajoute ce code dans `script.js`, **au-dessus** de la dernière ligne `chargerRestaurant();` :

```javascript
// Transforme "4.9" en "4,90 €"
function formaterPrix(prix) {
  if (prix === null || prix === undefined) {
    return "";
  }
  return Number(prix).toFixed(2).replace(".", ",") + " €";
}

async function chargerMenu() {
  const reponse = await fetch(API + "/products/" + DOMAINE);
  const familles = await reponse.json();
  console.log("Menu reçu :", familles);

  // On va construire tout le HTML du menu dans ce texte
  let html = "";

  // Pour chaque famille de la liste...
  for (const famille of familles) {
    html += `<h2 class="titre-famille">${famille.name}</h2>`;
    html += `<div class="grille">`;

    // ... et pour chaque produit de cette famille
    for (const produit of famille.menu_list || []) {
      let image = "";
      if (produit.image) {
        image = `<img src="${produit.image}" alt="${produit.name}">`;
      }

      html += `
        <div class="carte">
          ${image}
          <h3>${produit.name}</h3>
          <p>${produit.description || ""}</p>
          <strong class="prix">${formaterPrix(produit.price)}</strong>
        </div>`;
    }

    html += `</div>`;
  }

  // On remplace le contenu de la zone "menu" par notre HTML
  document.getElementById("menu").innerHTML = html;
}
```

Puis remplace la **dernière ligne** `chargerRestaurant();` par ces deux lignes :

```javascript
chargerRestaurant();
chargerMenu();
```

Regarde ta page : **tout le menu de BEST PIZZA s'affiche**, avec les photos et les prix ! 🍕🍔

Les mots nouveaux :

| Code | Explication |
|---|---|
| `for (const famille of familles)` | Une **boucle** : répète le code pour chaque famille de la liste. |
| Texte entre accents graves `` ` `` | Un texte dans lequel on peut insérer des variables. |
| `${produit.name}` | Insère la valeur de `produit.name` dans le texte. |
| `html += ...` | Ajoute du texte à la fin de la variable `html`. |
| `famille.menu_list \|\| []` | « Prends `menu_list`, ou une liste vide si elle n'existe pas. » Ça évite une erreur. |
| `innerHTML` | Remplace le contenu d'un élément par du HTML. |

L'accent grave `` ` `` se tape avec **AltGr + 7** sur un clavier AZERTY, puis **Espace**.

> الحلقة تعني: كرّر نفس العمل لكل عنصر في القائمة، واحدًا تلو الآخر. هنا عندنا حلقة داخل حلقة: لكل عائلة، ثم لكل منتج داخل هذه العائلة.

### 5.7 Quatrième étape : gérer les erreurs

Parfois, Internet coupe ou le serveur ne répond pas. Il faut prévenir l'utilisateur.

Remplace les deux dernières lignes, `chargerRestaurant();` et `chargerMenu();`, par :

```javascript
async function demarrer() {
  try {
    await chargerRestaurant();
    await chargerMenu();
  } catch (erreur) {
    console.error("Problème :", erreur);
    document.getElementById("menu").textContent =
      "Oups, impossible de charger les données. Regarde la console (F12).";
  }
}

demarrer();
```

- `try` : « essaie ce code ».
- `catch` : « s'il y a une erreur, fais plutôt ceci ».

**Teste-le :** en haut du fichier, remplace la valeur de `API` par une fausse adresse, par exemple `"https://faux.exemple/api"`. Regarde le message sur la page et dans la console. Puis remets la bonne adresse.

> نجرّب تنفيذ الكود. إذا حدث خطأ، لا تتوقف الصفحة ولا تبقى فارغة، بل نعرض رسالة مفهومة للمستخدم.

### 5.8 Défis bonus, si tu as le temps

Fais-les **toi-même**. Si tu bloques, demande à l'IA de t'expliquer une notion, pas de te donner le code :
1. Affiche le **nombre total de produits** en haut du menu.
2. Ajoute un **champ de recherche** : quand on tape « pizza », seules les cartes qui contiennent « pizza » restent visibles.
3. Affiche les **horaires de livraison**. Les données sont à cette adresse. Regarde les cases `delivery_time_start` et `delivery_time_end`.

```text
https://appdev.eatandcollect.fr/api/v3/knowledge-base/restaurant/dev.eatandcollect.fr
```

### ✅ Fin du jour 5

- [ ] Ma page affiche le nom, l'adresse, le téléphone et le statut de BEST PIZZA.
- [ ] Le vrai menu s'affiche, avec les images et les prix.
- [ ] Si l'API ne répond pas, un message s'affiche.
- [ ] Commit et push faits.

---

## Vendredi — Ce que tu montres à Jamal

1. Ta page dans Chrome, avec le vrai menu.
2. Ton projet sur GitLab, avec un commit par jour.
3. Tu expliques **sans l'IA**, avec tes mots :
   - la différence entre HTML, CSS et JavaScript ;
   - ce que fait `fetch`, et pourquoi on utilise `await` ;
   - ce qu'est le JSON ;
   - ce que fait la boucle `for` dans `chargerMenu` ;
   - la différence entre `commit` et `push`.

Si tu ne sais pas expliquer un point, ce n'est pas grave. Dis-le honnêtement, et on le revoit ensemble.

### Chaque soir : ton petit rapport

Envoie 3 lignes à Jamal :

```text
Fait aujourd'hui : ...
Où je bloque : ...
Demain je fais : ...
```

### Quand tu bloques

Dans cet ordre :
1. Lis le message d'erreur dans la console. Lis-le vraiment, jusqu'au bout.
2. Demande à l'IA de t'**expliquer** l'erreur.
3. Cherche 15 minutes par toi-même.
4. Si tu bloques encore, écris à Jamal : ce que tu voulais faire, ce que tu as essayé, et le message d'erreur.

> قبل أن تسأل جمال: اقرأ رسالة الخطأ، ثم اسأل الذكاء الاصطناعي، ثم ابحث ربع ساعة. وعندما تسأل، اكتب ماذا جرّبت، لأن هذا يوفّر الوقت على الجميع.

Bon courage, et amuse-toi bien ! 🚀
