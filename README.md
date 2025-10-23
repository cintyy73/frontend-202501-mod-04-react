# Clase 07: Elevar Estado en React (Lifting State Up)

## Teoría

En React, "elevar el estado" (lifting state up) es una técnica para compartir datos entre componentes. Cuando dos o más componentes necesitan acceder o modificar la misma información, se recomienda mover ese estado al ancestro común más cercano (generalmente el componente padre). Así, los componentes hijos pueden comunicarse a través de props y funciones.

**¿Por qué elevar el estado?**
- Permite sincronizar datos entre componentes.
- Evita duplicar lógica y estados.
- Facilita la reutilización y el mantenimiento del código.

**Ejemplo clásico:**
- Un formulario de login donde el estado del usuario y la contraseña se gestiona en el componente padre, y los hijos (formulario y mensaje de bienvenida) acceden y modifican ese estado.

## Guía de Clase

1. **Preguntas**
   - ¿Cuándo NO conviene elevar el estado?
     - No conviene elevar el estado cuando solo un componente necesita ese dato, ya que hacerlo puede complicar innecesariamente la estructura del código.
     - Si el estado es muy global y muchos componentes en diferentes niveles lo necesitan, puede ser mejor usar otras soluciones como Context API o Redux.
     - Cuando el estado no afecta a otros componentes y no hay necesidad de compartirlo, mantenerlo local es más simple y eficiente.
   - ¿Qué alternativas existen (context, redux, etc)?
     - **Context API:** Permite compartir datos globales entre componentes sin necesidad de pasar props manualmente por cada nivel. Es útil para temas, usuario autenticado, idioma, etc.
     - **Redux/MobX/Zustand:** Son librerías externas para manejar estados globales complejos. Se usan en aplicaciones grandes donde muchos componentes necesitan acceder y modificar el mismo estado.
     - **Props drilling:** Pasar props por varios niveles, pero puede volverse difícil de mantener si la estructura es profunda.
     - **Custom hooks:** Permiten encapsular lógica de estado y reutilizarla en varios componentes.

5. **Resumen**
   - Repasar ventajas y desventajas.
     - **Ventajas:** Facilita la sincronización de datos, mejora la comunicación entre componentes, evita duplicación de lógica.
     - **Desventajas:** Puede hacer el componente padre más complejo, y si se abusa puede dificultar la escalabilidad.
   - Buenas prácticas para organizar el estado en aplicaciones React.
     - Mantén el estado lo más local posible.
     - Eleva el estado solo cuando sea necesario compartirlo.
     - Considera usar Context o Redux para estados globales.
     - Divide los componentes en partes pequeñas y reutilizables.

---

**Tip:** Si el estado solo lo usa un componente, mantenlo local. Si lo usan varios, ¡eleva el estado!
