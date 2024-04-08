const React = require ('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                    <img src="/images/error404pug.jpg" alt="404PUG" width="400" height="400" />
                </div>
              <div>
                Photo by <a href="https://unsplash.com/@charlesdeluvio?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">charlesdeluvio</a> on <a href="https://unsplash.com/photos/black-dog-wearing-blue-denim-collar-K4mSJ7kc0As?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
          </main>
      </Def>
    )
  }  

module.exports = error404