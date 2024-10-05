export const initialContent = `
  <section>
    <h1>What is Tailwind CSS?</h1>
    <p>
      Tailwind CSS is a utility-first CSS framework that allows developers
      to build modern websites quickly by composing styles directly in their
      HTML markup. Instead of writing custom CSS, you use pre-defined
      utility classes that Tailwind provides, like <code>p-4</code> for
      padding or <code>text-center</code> for text alignment.
    </p>

    <ul data-type="taskList">
      <li data-type="taskItem" data-checked="true">A list item</li>
      <li data-type="taskItem" data-checked="false">And another one</li>
    </ul>

    <div>
      <h3>Example: Customizable Button</h3>
      <p>
        In Tailwind, you can create a fully customized button by combining
        utility classes:
      </p>
      <button>Click Me!</button>
    </div>

    <h2>Advantages of Tailwind CSS</h2>
    <ul>
      <li>
        <strong>Utility-First Approach:</strong> Write minimal CSS by using
        pre-built utility classes directly in your HTML.
      </li>
      <li>
        <strong>Rapid Prototyping:</strong> Quickly iterate and test designs
        without switching between HTML and CSS files.
      </li>
      <li>
        <strong>Customization:</strong> Tailwind allows for easy
        customization through its configuration file, enabling you to change
        themes, colors, and breakpoints.
      </li>
      <li>
        <strong>Responsive Design:</strong> Utility classes can be combined
        with responsive prefixes like <code>sm:</code>, <code>md:</code>,{" "}
        <code>lg:</code>, making mobile-first design simpler.
      </li>
    </ul>

    <div>
      <h3>Example: Responsive Grid Layout</h3>
      <p>
        Here's a simple 3-column grid layout that adjusts to 1 column on
        smaller screens:
      </p>
      <pre><code class="language-javascript">const a = 10;console.log(a);</code></pre>

      <div>
        <div>Column 1</div>
        <div>Column 2</div>
        <div>Column 3</div>
      </div>
    </div>

    <h2>Conclusion</h2>
    <p>
      Tailwind CSS is a great option for developers who want to build
      modern, responsive designs quickly. Its utility-first approach allows
      for flexibility and speed, without the need to write custom CSS for
      every project. By utilizing Tailwind's powerful pre-built classes, you
      can achieve any design style you want with minimal effort.
    </p>

    <footer>
      <p>Written by Dev Enthusiast</p>
    </footer>
  </section>
`;
