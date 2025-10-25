function Education() {
  return (
    <section className="relative py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-b from-blue-500 to-gradientEnd dark:from-gray-800 dark:to-gray-900">
      {/* Heading */}
      <div className="flex flex-col items-center text-center mb-14">
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white dark:text-gray-100">
          Software Education
        </h1>
      </div>

      {/* Education Entries */}
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Bachelor */}
        <div className="border-l-4 border-primary pl-4 sm:pl-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-white dark:text-gray-100">
            Bachelor Of Computer Science Advanced (A.I. Major)
          </h3>
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-1">
            <p className="text-base sm:text-lg text-white/80">
              The University of Adelaide, Adelaide
            </p>
            <p className="text-base sm:text-lg text-white/80 mt-1 sm:mt-0">2025</p>
          </div>
          <p className="text-sm sm:text-base text-white/80 mt-2">
            Won $1000 in the Tech-Echallenge for GenLite, a novel automated Spotify to lighting solution for DJs.
          </p>
        </div>

        {/* SQL */}
        <div className="border-l-4 border-secondary pl-4 sm:pl-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-white dark:text-gray-100">
            SQL Advanced Querying Techniques
          </h3>
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-1">
            <p className="text-base sm:text-lg text-white/80">Maven Analytics</p>
            <p className="text-base sm:text-lg text-white/80 mt-1 sm:mt-0">2025</p>
          </div>
        </div>

        {/* Python */}
        <div className="border-l-4 border-accent pl-4 sm:pl-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-white dark:text-gray-100">
            Python Masterclass
          </h3>
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-1">
            <p className="text-base sm:text-lg text-white/80">Tim Buchalka's Learn Programming Academy</p>
            <p className="text-base sm:text-lg text-white/80 mt-1 sm:mt-0">2021</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;