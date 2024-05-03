import './page1.css'; 

import Meta from '@/components/Meta';

function Page1() {
  return (
    <>
      <Meta title="Bookshelf" />
      <div className="page-wrapper">
        <h4 style={{ textAlign: 'center' }}>Choose One Class From the Shelf to Continue:</h4>
        
        {/* Baby to Primary Two */}
        <div className="bookshelf">
          <div className="covers">
            <div className="thumb book-1">
              <a href="menu baby.html">
                <img src="https://fresh-teacher.github.io/images/book2/BABY CLASS.jpg" alt="Baby Class" />
              </a>
            </div>
            <div className="thumb book-1">
              <a href="menu middle.html">
                <img src="https://fresh-teacher.github.io/images/book2/MIDDLE CLASS.jpg" alt="Middle Class" />
              </a>
            </div>
            <div className="thumb book-1">
              <a href="menu top.html">
                <img src="https://fresh-teacher.github.io/images/book2/TOP CLASS.jpg" alt="Top Class" />
              </a>
            </div>
            <div className="thumb book-1">
              <a href="menu p1.html">
                <img src="https://fresh-teacher.github.io/images/book2/PRIMARY ONE.jpg" alt="Primary One" />
              </a>
            </div>
            <div className="thumb book-1">
              <a href="menu p2.html">
                <img src="https://fresh-teacher.github.io/images/book2/PRIMARY TWO.jpg" alt="Primary Two" />
              </a>
            </div>
          </div>
          <img className="shelf-img" src="https://fresh-teacher.github.io/images/shelf_wood.png" alt="Wooden Shelf" />
        </div>
        <br />

        {/* Primary Three to Primary Seven */}
        <div className="bookshelf">
          <div className="covers">
            <div className="thumb book-1">
              <a href="menu p3.html">
                <img src="https://fresh-teacher.github.io/images/book2/PRIMARY THREE.jpg" alt="Primary Three" />
              </a>
            </div>
            <div className="thumb book-1">
              <a href="menu p4.html">
                <img src="https://fresh-teacher.github.io/images/book2/PRIMARY FOUR.jpg" alt="Primary Four" />
              </a>
            </div>
            <div className="thumb book-1">
              <a href="menu p5.html">
                <img src="https://fresh-teacher.github.io/images/book2/PRIMARY FIVE.jpg" alt="Primary Five" />
              </a>
            </div>
            <div className="thumb book-1">
              <a href="menu p6.html">
                <img src="https://fresh-teacher.github.io/images/book2/PRIMARY SIX.jpg" alt="Primary Six" />
              </a>
            </div>
            <div className="thumb book-1">
              <a href="menu p7.html">
                <img src="https://fresh-teacher.github.io/images/book2/PRIMARY SEVEN.jpg" alt="Primary Seven" />
              </a>
            </div>
          </div>
          <img className="shelf-img" src="https://fresh-teacher.github.io/images/shelf_wood.png" alt="Wooden Shelf" />
        </div>
        <br />

        {/* Senior One to Senior Six */}
        <div className="bookshelf">
          <div className="covers">
            <div className="thumb book-1">
              <a href="menu s1.html">
                <img src="https://fresh-teacher.github.io/images/book2/SENIOR ONE.jpg" alt="Senior One" />
              </a>
            </div>
            <div className="thumb book-1">
              <a href="menu s2.html">
                <img src="https://fresh-teacher.github.io/images/book2/SENIOR TWO.jpg" alt="Senior Two" />
              </a>
            </div>
            <div className="thumb book-1">
              <a href="menu s3.html">
                <img src="https://fresh-teacher.github.io/images/book2/SENIOR THREE.jpg" alt="Senior Three" />
              </a>
            </div>
            <div className="thumb book-1">
              <a href="menu s4.html">
                <img src="https://fresh-teacher.github.io/images/book2/SENIOR FOUR.jpg" alt="Senior Four" />
              </a>
            </div>
            <div className="thumb book-1">
              <a href="menu s5.html">
                <img src="https://fresh-teacher.github.io/images/book2/SENIOR FIVE.jpg" alt="Senior Five" />
              </a>
            </div>
            <div className="thumb book-1">
              <a href="menu s6.html">
                <img src="https://fresh-teacher.github.io/images/book2/SENIOR SIX.jpg" alt="Senior Six" />
              </a>
            </div>
          </div>
          <img className="shelf-img" src="https://fresh-teacher.github.io/images/shelf_wood.png" alt="Wooden Shelf" />
        </div>
        <br />
      </div>
    </>
  );
}

export default Page1;
