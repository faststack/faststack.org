let parser = require('@architect/shared/parser')
let fs = require('fs')
let { join } = require('path')
let read = file => fs.readFileSync(file).toString()

module.exports = function template() {
  let raw = read(join(__dirname, `index.md`))
  let parsed = parser(raw)
  let {
    title,
    description,
    hero,
    subhead,
    intro,
    whatIsFASTstackHeader,
    whatIsFASTstack,
    functionsHeader, functions,
    APIsHeader, APIs,
    storageHeader, storage,
    testabilityHeader, testability,
    getStartedHeader,
    getStarted,
    message
  } = parsed
  let body = `
  <header
    class="
      padding-top2
      padding-top3-desktop
      padding-right1
      padding-right3-desktop
      padding-bottom5
      padding-bottom8-desktop
      padding-left1
      padding-left3-desktop
      background-image-linear-gradient1
      clip-path-slant
      clip-path-slant-desktop
    "
  >
    <div
      class="
        max-width
        margin-auto
        color-light
      "
    >
      <h1
        class="
          margin-bottom-7
          font-size4
          font-size6-desktop
          font-weight-black
          font-style-italic
          text-shadow-drop
          text-shadow-drop-desktop
          sans-serif
        "
      >
        FASTstack
      </h1>
      <h2
        class="
          margin-bottom-1
          font-size1
          font-size2-desktop
          text-shadow-drop
          sans-serif
        "
      >
        ${hero}
      </h2>
      <h4
        class="
          font-size0
          font-size1-desktop
          font-weight-medium
          sans-serif
        "
      >
        ${subhead}
      </h4>
    </div>
  </header>

  <section
    class="
      padding-top3
      padding-right1
      padding-bottom1
      padding-left1
      font-size0
      font-size1-desktop
    "
  >
    <div
      class="
        max-width
        margin-auto
      "
    >
      <div
        class="
          margin-bottom3
          font-weight-extra-light
        "
      >
        ${intro}
      </div>
    </div>
  </section>

  <section
    class="
      position-relative
      background-color-white
      padding1
    "
  >
    <div
      class="
        max-width
        margin-auto
      "
    >
      <div
        class="
          margin-bottom3
          padding-top2
          padding-right3
          padding-bottom3
          padding-left2
          font-size0
          font-size1-desktop
          color-black
          border-solid
          border-color-accent
          border-width1
          border-width2-desktop
        "
      >
        <h3
          class="
            font-size2
            font-size3-desktop
            margin-bottom-1
            font-style-italic
            sans-serif
            color-contrast
          "
        >
          ${whatIsFASTstackHeader}
        </h3>

        ${whatIsFASTstack}
      </div>
    </div>
  </section>

  <section
    class="
      padding1
      margin-bottom4
      font-size0
    "
  >
    <div
      class="
        max-width
        margin-auto
      "
    >
      <div
        class="
          display-flex
          align-items-center
          margin-bottom2
        "
      >
        <div
          class="
            position-relative
            background-color-white
          "
        >
          <h1
            class="
              margin-right3
              font-size5
              font-size7-desktop
              font-style-italic
              color-black
              display-none
              display-block-desktop
              mw-letter
            "
          >
            F
          </h1>
        </div>
        <div
          class="
            font-weight-book
            font-weight-medium-desktop
          "
        >
          <h2
            class="
              margin-bottom-4
              margin-bottom-2-desktop
              font-size1
              font-size2-desktop
              font-style-italic
              color-dark
              sans-serif
              font-weight-medium
              font-weight-thin-desktop
            "
          >
            ${functionsHeader}
          </h2>
          ${functions}
        </div>
      </div>

      <div
        class="
          display-flex
          align-items-center
          margin-bottom2
        "
      >
        <div
          class="
            position-relative
            background-color-white
          "
        >
          <h1
            class="
              display-none
              display-block-desktop
              margin-right3
              font-size5
              font-size7-desktop
              font-style-italic
              color-black
              mw-letter
            "
          >
            A
          </h1>
        </div>
        <div
          class="
            font-weight-book
            font-weight-medium-desktop
          "
        >
          <h2
            class="
              margin-bottom-4
              margin-bottom-2-desktop
              font-size1
              font-size2-desktop
              font-style-italic
              color-dark
              sans-serif
              font-weight-medium
              font-weight-thin-desktop
            "
          >
            ${APIsHeader}
          </h2>
          ${APIs}
        </div>
      </div>

      <div
        class="
          display-flex
          align-items-center
          margin-bottom2
        "
      >
        <div
          class="
            position-relative
            background-color-white
          "
        >
          <h1
            class="
              display-none
              display-block-desktop
              margin-right3
              font-size5
              font-size7-desktop
              font-style-italic
              color-black
              mw-letter
            "
          >
            S
          </h1>
        </div>
        <div
          class="
            font-weight-book
            font-weight-medium-desktop
          "
        >
          <h2
            class="
              margin-bottom-4
              margin-bottom-2-desktop
              font-size1
              font-size2-desktop
              font-style-italic
              color-dark
              sans-serif
              font-weight-medium
              font-weight-thin-desktop
            "
          >
            ${storageHeader}
          </h2>
          ${storage}
        </div>
      </div>

      <div
        class="
          display-flex
          align-items-center
          margin-bottom2
        "
      >
        <div
          class="
            position-relative
            background-color-white
          "
        >
          <h1
            class="
              display-none
              display-block-desktop
              margin-right3
              font-size5
              font-size7-desktop
              font-style-italic
              color-black
              mw-letter
            "
          >
            T
          </h1>
        </div>
        <div
          class="
            font-weight-book
            font-weight-medium-desktop
          "
        >
          <h2
            class="
              margin-bottom-4
              margin-bottom-2-desktop
              font-size1
              font-size2-desktop
              font-style-italic
              color-dark
              sans-serif
              font-weight-medium
              font-weight-thin-desktop
            "
          >
            ${testabilityHeader}
          </h2>
          ${testability}
        </div>
      </div>
    </div>

  </section>
  <footer
    class="
      padding-top8
      padding-right1
      padding-right3-desktop
      padding-bottom6
      padding-left1
      padding-left3-desktop
      text-align-end
      background-dark
      color-light
      clip-path-slant1
    "
  >
   <div
    class="
      max-width
      margin-auto
    "
   >
    <h3
      class="
        font-size0
        font-style-italic
        sans-serif
      "
    >
      ${getStartedHeader}
    </h3>

    <div
      class="
        margin-bottom4
      "
    >
      ${getStarted}
    </div>

    ${message}
   </div>
  </footer>
  `
  return { title, description, body }
}
