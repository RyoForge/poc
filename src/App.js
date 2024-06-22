import React from 'react';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-gray-100 py-4">
        <div className="container mx-auto p-4">
          <div className="flex justify-center">
            <h1 className="text-3xl font-bold">S V M Arts Science and Commerce College</h1>
          </div>
          <div className="flex justify-center">
            <h2 className="text-lg">NAAC A  ACCREDITION COLLEGE, UGC RECOGNISED AND AFFILIATED RANI CHANNAMMA UNIVERSITY BELAGAVI</h2>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-4">
          <div className="container mx-auto p-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                <div className="about">
                  <h3 className="text-2xl font-bold">Our Values</h3>
                  <div className="value-item">
                    <h4>Our Vision</h4>
                    <p>Impart quality education with human values and social commitment</p>
                  </div>
                  <div className="value-item">
                    <h4>Our Mission</h4>
                    <p>Ignite the minds with high values to transform society through commitment, harmony, unity, equality, integrity and accountability.</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                <div className="staff">
                  <h3 className="text-2xl font-bold">Our Staff</h3>
                  <div className="staff-member">
                    <img src="staff-photo.jpg" alt="Staff Member Name" className="w-24 h-24 rounded-full" />
                    <h4>Staff Member Name</h4>
                    <p>Staff Member Title</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto p-4">
          <div className="flex justify-center">
            <p>&copy; SVM Arts Science &amp; Commerce College</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;