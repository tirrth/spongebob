import FirebaseContext, { withFirebase } from "./context";
import Firebase from "./firebase";

// const FirebaseProvider = ({ children }) => {
//   return (
//     <FirebaseContext.Provider value={new Firebase()}>
//       {children}
//     </FirebaseContext.Provider>
//   );
// };

export default Firebase;
export { FirebaseContext, withFirebase };
