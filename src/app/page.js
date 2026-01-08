//if page is an server component fetched by an client component then no need to add 'use client' at the top of the page.js file

// import Image from "next/image";
// import styles from "./page.module.css";
// import Title from "./components/Title";

// export default function Home() {
//   return (
//     //<div className={styles.page}>
//     <div>
//       <h1>Hello world!</h1>
//       <Title />
//     </div>
    
//   );
// }

//----------------------------------------------

//if page has lots of client components code then make page as a client renderiing page by using 'use client' at the top of the page.js file

"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Title from "./components/Title";

export default function Home() {
  return (
    //<div className={styles.page}>
    <div>
      <h1 onClick={() => alert("Alert from h1 tag")}>
        Hello world!</h1>
      <Title />
    </div>
    
  );
}
