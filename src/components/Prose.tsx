export function Prose() {
  return (
    <div className="min-h-screen p-8 text-zinc-900 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div
        className="bg-white w-[1100px] mx-auto rounded-xl min-h-[720px] shadow-sm border border-black/20 overflow-hidden
        grid grid-cols-[16rem_1fr]
      "
      >
        <aside className="bg-zinc-50 border-r border-r-zinc-100 p-4">
          <div className="flex gap-2 group">
            <button className="size-3 rounded-full bg-zinc-300 group-hover:bg-red-400" />
            <button className="size-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400" />
            <button className="size-3 rounded-full bg-zinc-300 group-hover:bg-green-400" />
          </div>
        </aside>
        <main className="p-4">
          <div className="max-w-[700px] mx-auto pt-16 prose prose-violet">
            <section>
              <h2>What is Tailwind CSS?</h2>
              <p>
                Tailwind CSS is a utility-first CSS framework that allows
                developers to build modern websites quickly by composing styles
                directly in their HTML markup. Instead of writing custom CSS,
                you use pre-defined utility classes that Tailwind provides, like{" "}
                <code>p-4</code> for padding or <code>text-center</code> for
                text alignment.
              </p>

              <div>
                <h3>Example: Customizable Button</h3>
                <p>
                  In Tailwind, you can create a fully customized button by
                  combining utility classes:
                </p>
                <pre>
                  <code>&lt;button&gt; Click Me! &lt;/button&gt;</code>
                </pre>
                <button>Click Me!</button>
              </div>

              <h2>Advantages of Tailwind CSS</h2>
              <ul>
                <li>
                  <strong>Utility-First Approach:</strong> Write minimal CSS by
                  using pre-built utility classes directly in your HTML.
                </li>
                <li>
                  <strong>Rapid Prototyping:</strong> Quickly iterate and test
                  designs without switching between HTML and CSS files.
                </li>
                <li>
                  <strong>Customization:</strong> Tailwind allows for easy
                  customization through its configuration file, enabling you to
                  change themes, colors, and breakpoints.
                </li>
                <li>
                  <strong>Responsive Design:</strong> Utility classes can be
                  combined with responsive prefixes like <code>sm:</code>,{" "}
                  <code>md:</code>, <code>lg:</code>, making mobile-first design
                  simpler.
                </li>
              </ul>

              <div>
                <h3>Example: Responsive Grid Layout</h3>
                <p>
                  Here's a simple 3-column grid layout that adjusts to 1 column
                  on smaller screens:
                </p>
                <pre>
                  <code>
                    &lt;div&gt; &lt;div&gt;Column 1&lt;/div&gt;
                    &lt;div&gt;Column 2&lt;/div&gt; &lt;div&gt;Column
                    3&lt;/div&gt; &lt;/div&gt;
                  </code>
                </pre>
                <div>
                  <div>Column 1</div>
                  <div>Column 2</div>
                  <div>Column 3</div>
                </div>
              </div>

              <h2>Conclusion</h2>
              <p>
                Tailwind CSS is a great option for developers who want to build
                modern, responsive designs quickly. Its utility-first approach
                allows for flexibility and speed, without the need to write
                custom CSS for every project. By utilizing Tailwind's powerful
                pre-built classes, you can achieve any design style you want
                with minimal effort.
              </p>

              <footer>
                <p>Written by Dev Enthusiast</p>
              </footer>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
