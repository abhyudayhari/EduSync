"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const getStarted = () => {
    router.push("/login");
  };

  return (
    <main className="flex flex-col items-center justify-between p-12 bg-gradient-to-b from-blue-950 to-blue-600 min-h-screen text-white">
      <section className="grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl glass-morph p-10 gap-10 sm:p-4">
        <section className="text-center mb-12 ">
          <h6 className="text-m md:text-2xl lg:3xl font-extrabold mb-10 mt-20 sm:text-xl  ">
            Unlock Your Potential with Personalized Tutoring
          </h6>
          <p className="text-lg mb-8 md:text-xl font-serif  ">
            Connect with experienced tutors for <br /> one-to-one learning.
          </p>
          <button
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white"
            onClick={getStarted}
          >
            Get Started
          </button>
        </section>
        <img
          src="./myimage.gif"
          alt="My Image"
          className="mainImage place-self-center "
        />
      </section>

      <h1 className="features mt-20 text-2xl  md:text-3xl font-sans mb-10">
        Know More
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-8 w-full max-w-4xl justify-items-center main-dabba md:mt-4">
        {/* Feature Card 1 */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-blue-400 rounded-lg shadow-lg p-6 dabba ">
              <h3 className="text-xl font-semibold my-4">
                Seamless Ingress Experience
              </h3>
            </div>
            <div className="flip-card-back bg-blue-400 rounded-lg shadow-lg p-6 dabba">
              <p className="text-white text-left rtl:text-right">
                • Effortless navigation for students to peruse and join their
                class particulars.
              </p>
              <p className="text-white text-left rtl:text-right">
                • Tutors wield facile access to class intricacies, seamlessly
                initiating scholarly sessions.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Card 2 */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-blue-400 rounded-lg shadow-lg p-6 dabba">
              <h3 className="text-xl font-semibold my-4">
                Cogitative Class Scheduler
              </h3>
            </div>
            <div className="flip-card-back bg-blue-400 rounded-lg shadow-lg p-6 dabba">
              <p className="text-white text-left rtl:text-right">
                • Intuitive interface empowering students and tutors to
                delineate preferred temporal epochs.
              </p>
              <p className="text-white text-left rtl:text-right">
                • Autonomous generation and dissemination of class calendars, a
                sublime amalgamation of convenience and precision.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Card 3 */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-blue-400 rounded-lg shadow-lg p-6 dabba">
              <h3 className="text-xl font-semibold my-4">
                Attendance Ascertainment
              </h3>
            </div>
            <div className="flip-card-back bg-blue-400 rounded-lg shadow-lg p-6 dabba">
              <p className="text-white text-left rtl:text-right">
                • Impeccable feature for the scrupulous recording of attendance
                during each scholarly convocation.
              </p>
              <p className="text-white text-left rtl:text-right">
                • Effortless access to attendance records for students and
                tutors alike.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Card 4 */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-blue-400 rounded-lg shadow-lg p-6 dabba">
              <h3 className="text-xl font-semibold my-4">
                NLP-Pinnacle Chatbot
              </h3>
            </div>
            <div className="flip-card-back bg-blue-400 rounded-lg shadow-lg p-6 dabba">
              <p className="text-white text-left rtl:text-right">
                • NLP eminence enabling students to elegantly requisition class
                timetables, annul engagements, and seek elucidation on class
                schedules.
              </p>
              <p className="text-white text-left rtl:text-right">
                • NLP eminence empowering tutors to effortlessly peruse their
                class schedules.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
