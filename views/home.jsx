const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/steak-dinner.jpg" alt="Steak" width="400" height="400" />
                </div>
                <div>
                Photo by <a href="https://unsplash.com/@sunorwind?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">sunorwind</a> on <a href="https://unsplash.com/photos/cooked-food-on-blue-ceramic-plate-Z4CvBOpOi6w?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
                <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>
            </main>
        </Def>
    )
}



module.exports = home