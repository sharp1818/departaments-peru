const saveData = async () => {
    try {
      for (const departamento of data.departamentos) {
        const departamentoRef = doc(db, 'departaments', departamento.nombre);
        for (const provincia of departamento.provincias) {
          const additionalUserInfo = {
            [provincia.nombre]: provincia.distritos,
          };
          await setDoc(departamentoRef, additionalUserInfo, { merge: true });
          
        }
      }
    } catch (error) {
      console.error(error);
    }
  };