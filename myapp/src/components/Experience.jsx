function Experience() {
  return (
    <section className="relative py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-b from-blue-500 to-gradientEnd dark:from-gray-800 dark:to-gray-900">
      {/* Heading */}
      <div className="flex flex-col items-center text-center mb-14">
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white dark:text-gray-100">
          Software Experience
        </h1>
      </div>

      {/* Experience Entries */}
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Research Assistant */}
        <div className="border-l-4 border-primary pl-4 sm:pl-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-white dark:text-gray-100">
            Research Assistant
          </h3>
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-1">
            <p className="text-base sm:text-lg text-white/80">
              The University of Adelaide, Adelaide
            </p>
            <p className="text-base sm:text-lg text-white/80 mt-1 sm:mt-0">
              November 2023 to March 2024
            </p>
          </div>
          <p className="text-sm sm:text-base text-white/80 mt-2">
            • Developed novel Machine Learning pipelines to advance Machine Learning and Explainability in challenging network classification problems, resulting in a paper accepted into ICMLC-2024.
          </p>
        </div>

        {/* Software Intern */}
        <div className="border-l-4 border-secondary pl-4 sm:pl-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-white dark:text-gray-100">
            Software Intern
          </h3>
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-1">
            <p className="text-base sm:text-lg text-white/80">Liberty Onesteel, Whyalla</p>
            <p className="text-base sm:text-lg text-white/80 mt-1 sm:mt-0">
              December 2018 to February 2019
            </p>
          </div>
          <p className="text-sm sm:text-base text-white/80 mt-2">
            • Automated operating project timetable transformation to reduce workflow impediments
          </p>
        </div>

        {/* Vacation Student */}
        <div className="border-l-4 border-accent pl-4 sm:pl-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-white dark:text-gray-100">
            Vacation Student
          </h3>
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-1">
            <p className="text-base sm:text-lg text-white/80">Hatch, Brisbane</p>
            <p className="text-base sm:text-lg text-white/80 mt-1 sm:mt-0">
              January 2017 to February 2017
            </p>
          </div>
          <p className="text-sm sm:text-base text-white/80 mt-2">
            • Automated data migration & entry, alongside the production of a website for vendor information.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;