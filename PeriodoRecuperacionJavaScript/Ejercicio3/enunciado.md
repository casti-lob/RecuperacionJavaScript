# Validación de formulario:
En este ejercicio, a partir del formulario proporcionado debes crear un script para verificar que el usuario ha introducido todos los datos requeridos y los datos son válidos. El script debe validar lo siguiente:

- El nombre es requerido, deben ser letras con una longitud de más de 3 caracteres.
- Los apellidos también son requeridos y tener una longitud de más de 6 carácteres.
- La edad debe ser un número mayor o igual que 18.
- La matrícula del coche debe estar formada por 4 números un espacio y 3 letras mayúsculas. Además no debe existir, para ello tendremos un array que contendrá al menos 3 matrículas y se deberá comprobar que no exista.
- La fecha de matriculación debe ser anterior a la actual.
- Se debe haber seleccionado una provincia.

Además si le damos al botón limpiar se borrarán los datos.

Se deben mostrar los errores de validación debajo de cada campo, para esto es posible añadir elementos html al formulario, en ningún caso modificar los existentes. Si se cumplen todos los requisitos de validación, se enviará el formulario, pero no se debe recargará la página, se tienen que borrar todos los campos y se tiene que añadir la matrícula al array que hemos creado.
