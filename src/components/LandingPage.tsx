import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Shield,
  ArrowRightLeft,
  ShieldCheck,
  Activity,
  Globe,
  LayoutDashboard,
  Mail,
  PlayCircle,
  Users,
  School,
  BookOpen,
  Award,
  CheckCircle,
  Lock,
  Key,
  Building2,
  GraduationCap,
  User,
  Monitor,
  BarChart2,
  FileText,
  Clock,
  Star,
  ChevronRight,
  Zap,
  Database,
  Eye,
  Phone,
  MapPin,
} from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Refs for scroll animations
  const [problemRef, problemInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [solutionRef, solutionInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [featuresRef, featuresInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [benefitsRef, benefitsInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  // const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [statsRef, statsInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    // Simulate progressive loading
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            setIsLoaded(true);
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const handleRequestDemo = () => {
    navigate("/demo");
  };
  <button
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    className="md:hidden text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600"
    aria-label="Toggle mobile menu"
    aria-expanded={mobileMenuOpen}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>;

  const keyFeatures = [
    {
      icon: User,
      title: "Unique Digital Student ID",
      description:
        "Every Nigerian student gets a permanent, blockchain-secured digital identity that follows them throughout their educational journey",
      image:
        "https://media.istockphoto.com/id/2131702232/vector/digitalforensics.webp?a=1&b=1&s=612x612&w=0&k=20&c=7OLDWgMNKdOZKGfDhXSyYGL3ejbHPL0YSfDEh9rV0cs=",
    },
    {
      icon: ArrowRightLeft,
      title: "Instant Record Transfer",
      description:
        "Transfer academic records between Nigerian schools in minutes, not weeks, eliminating paperwork and bureaucratic delays",
      image:
        "https://plus.unsplash.com/premium_photo-1666997726532-33f671ca24c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhbnNmZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      icon: ShieldCheck,
      title: "Tamper-Proof Verification",
      description:
        "Blockchain technology ensures WAEC and NECO records cannot be altered or forged, eliminating certificate fraud",
      image:
        "data:image/webp;base64,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",
    },
    {
      icon: Activity,
      title: "Real-Time Performance Tracking",
      description:
        "Monitor academic progress with live updates and analytics specifically designed for Nigerian curriculum standards",
      image:
        "data:image/webp;base64,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",
    },
    {
      icon: Globe,
      title: "Cross-State Compatibility",
      description:
        "Seamless transfers across all 36 Nigerian states and FCT, maintaining educational continuity regardless of location",
      image:
        "https://img.freepik.com/premium-vector/green-nigeria-simple-map-with-states-border-outline-vector-illustration_768932-1523.jpg",
    },
    {
      icon: LayoutDashboard,
      title: "Visual Progress Dashboard",
      description:
        "Intuitive dashboards for Nigerian students, parents, and educators with culturally relevant metrics and insights",
      image:
        "https://res.cloudinary.com/djxsgibdv/image/upload/v1753358034/dash_vfmkp5.png",
    },
  ];

  const schoolBenefits = [
    "Instant verification of student WAEC and NECO results",
    "Automated transfer processing for new students",
    "Data-driven placement decisions for JSS and SSS levels",
    "Reduced administrative burden for Nigerian school staff",
  ];

  const parentBenefits = [
    "One-click school transfers during family relocations across Nigeria",
    "Permanent digital records of JAMB and WAEC scores",
    "Real-time monitoring of ward's performance",
    "Secure academic portfolio for Nigerian university applications",
  ];

  const studentBenefits = [
    "Portable academic identity across all Nigerian schools",
    "Continuous learning progress from primary to tertiary",
    "Skills assessment visualization for career planning",
    "Nationwide recognition of achievements and certificates",
  ];

  const ministryBenefits = [
    "System-wide oversight of Nigerian educational standards",
    "Data-driven policy making for Nigerian education",
    "Quality assurance across public and private schools",
    "National standardization of academic records",
  ];

  const trustIndicators = [
    { icon: Building2, text: "Federal Ministry of Education Approved" },
    { icon: Award, text: "NITDA Certified" },
    { icon: Lock, text: "256-bit Encryption" },
    { icon: Database, text: "Blockchain Secured" },
  ];

  const stats = [
    {
      number: "65%",
      label: "of student records lost during transfers between Nigerian states",
    },
    {
      number: "2-3 weeks",
      label: "spent re-registering at new schools after relocation",
    },
    {
      number: "40%",
      label: "of WAEC and NECO certificates require manual verification",
    },
    {
      number: "100%",
      label: "of Nigerian schools struggle with accurate student placement",
    },
  ];

  const testimonials = [
    {
      quote:
        "Within minutes, we accessed Chidera's complete academic history from Anambra when she transferred to our school in Ibadan. What used to take weeks now happens instantly.",
      name: "Dr. Oluwaseun Adeyemi",
      title: "Principal, Divine Grace Academy",
      location: "Ibadan, Oyo State",
      image:
        "https://images.pexels.com/photos/8617764/pexels-photo-8617764.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      quote:
        "We now understand new students' WAEC results and capabilities before their first day, allowing for personalized learning from day one. It's revolutionary for our school in Lagos.",
      name: "Mrs. Folake Ogunleye",
      title: "Academic Director",
      location: "Sunshine College, Lagos",
      image:
        "https://images.pexels.com/photos/8617774/pexels-photo-8617774.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      quote:
        "As a parent who relocated from Port Harcourt to Abuja, EduChain saved us weeks of stress. My children's records transferred seamlessly, and they started their new school without missing any learning time.",
      name: "Mr. Ibrahim Mohammed",
      title: "Parent of three students",
      location: "Abuja, FCT",
      image:
        "https://images.pexels.com/photos/8617741/pexels-photo-8617741.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const partners = [
    {
      name: "Federal Ministry of Education",
      logo: "https://images.pexels.com/photos/8617927/pexels-photo-8617927.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      name: "WAEC Nigeria",
      logo: "https://images.pexels.com/photos/8617769/pexels-photo-8617769.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      name: "NECO",
      logo: "https://images.pexels.com/photos/8617522/pexels-photo-8617522.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      name: "JAMB",
      logo: "https://images.pexels.com/photos/8423214/pexels-photo-8423214.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      name: "NITDA",
      logo: "https://images.pexels.com/photos/8423587/pexels-photo-8423587.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
  ];

  const contactInfo = {
    phone: "+234 812 345 6789",
    email: "info@educhain.ng",
    address:
      "Plot 123, Adetokunbo Ademola Crescent, Victoria Island, Lagos, Nigeria",
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-green-600 to-green-800 flex flex-col items-center justify-center z-50">
        <div className="w-24 h-24 mb-8">
          <GraduationCap className="w-full h-full text-white animate-pulse" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-8">EduChain Nigeria</h1>
        <div className="w-64 h-2 bg-green-900/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-300"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
        <p className="text-green-100 mt-4">
          {loadingProgress < 30 && "Initializing secure connection..."}
          {loadingProgress >= 30 &&
            loadingProgress < 60 &&
            "Loading educational resources..."}
          {loadingProgress >= 60 &&
            loadingProgress < 90 &&
            "Preparing your experience..."}
          {loadingProgress >= 90 && "Almost ready!"}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav
        className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">
                EduChain Nigeria
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#problem"
                className="text-gray-600 hover:text-gray-900 transition-all duration-200 hover:underline hover:underline-offset-4"
              >
                The Problem
              </a>
              <a
                href="#solution"
                className="text-gray-600 hover:text-gray-900 transition-all duration-200 hover:underline hover:underline-offset-4"
              >
                Our Solution
              </a>
              <a
                href="#benefits"
                className="text-gray-600 hover:text-gray-900 transition-all duration-200 hover:underline hover:underline-offset-4"
              >
                Benefits
              </a>
              {/* <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-all duration-200 hover:underline hover:underline-offset-4">Success Stories</a> */}
              <button
                onClick={handleRequestDemo}
                className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition-all duration-200 transform hover:scale-105"
              >
                Request Demo
              </button>
            </div>
            <button className="md:hidden text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#problem"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-green-100 hover:text-green-700"
              >
                The Problem
              </a>
              <a
                href="#solution"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-green-100 hover:text-green-700"
              >
                Our Solution
              </a>
              <a
                href="#benefits"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-green-100 hover:text-green-700"
              >
                Benefits
              </a>
              {/* <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-green-100 hover:text-green-700">Success Stories</a> */}
              <button
                onClick={handleRequestDemo}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-green-600 hover:bg-green-700 transition-colors"
              >
                Request Demo
              </button>
            </div>
          </div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Building Nigeria's First
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 block">
                  Digital Academic Identity System
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Secure. Transparent. Always Available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={handleRequestDemo}
                  className="bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Transform Your School</span>
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <PlayCircle className="w-5 h-5" />
                  <span>Watch Demo</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1694757283921-aefccec06443?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RURVfGVufDB8fDB8fHww"
                  alt="Nigerian students using digital education platform"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
                <motion.div
                  className="absolute bottom-6 left-6 right-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-900">
                        Live Academic Records
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Real-time synchronization across all Nigerian schools
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">
                    Blockchain Secured
                  </span>
                </div>
              </motion.div>

              {/* <motion.div 
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">WAEC Verified</span>
                </div>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section id="problem" className="py-20 bg-gray-50" ref={problemRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={problemInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Challenge Facing Nigerian Education
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Every year in Nigeria, countless students and families face
                unnecessary barriers in their educational journey. Lost WAEC
                certificates, delayed transfers between states, and verification
                challenges create obstacles that shouldn't exist in our digital
                age.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Record Loss During Relocation
                    </h3>
                    <p className="text-gray-700">
                      Students lose academic progress when relocating between
                      Lagos and Abuja, often having to repeat classes or exams
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Manual Verification Bottlenecks
                    </h3>
                    <p className="text-gray-700">
                      Schools struggle with manual verification of JAMB and NECO
                      results, delaying admissions by weeks or months
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Bureaucratic Delays
                    </h3>
                    <p className="text-gray-700">
                      Parents face weeks of bureaucratic delays at education
                      ministries, often traveling long distances multiple times
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1698827624538-02ee6364cbd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8"
                alt="Nigerian students facing educational challenges"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            ref={statsRef}
            initial={{ opacity: 0, y: 50 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-white" ref={solutionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={solutionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div>
              <img
                src="https://www.unicefventurefund.org/sites/default/files/2024-07/giga_blockchain_graduation_uni459459.jpg"
                alt="Nigerian digital education technology dashboard"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div>
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                <span>Made in Nigeria Solution</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Introducing EduChain
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Nigeria's Blockchain-Powered Education Management Platform that
                transforms how academic records are created, stored, and
                transferred across our great nation.
              </p>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={solutionInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Instant Verification
                    </h3>
                    <p className="text-gray-700">
                      Immediate verification of WAEC, NECO,SCHOOL TRANSCRIPTS
                      and JAMB results with digital signatures
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={solutionInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Blockchain Security
                    </h3>
                    <p className="text-gray-700">
                      Tamper-proof academic credentials that cannot be forged or
                      altered
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={solutionInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Nationwide Compatibility
                    </h3>
                    <p className="text-gray-700">
                      Seamless integration across all Nigerian states from Lagos
                      to Kano to Enugu
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 bg-gray-50" ref={featuresRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Powerful Features for Modern Nigerian Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with cutting-edge technology to solve real-world educational
              challenges in Nigeria
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200 group transform hover:-translate-y-1"
                  initial={{ opacity: 0, y: 30 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-200">
                      <Icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-200" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stakeholder Benefits Section */}
      <section id="benefits" className="py-20 bg-white" ref={benefitsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Benefits for Every Nigerian Stakeholder
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              EduChain creates value for everyone in Nigeria's educational
              ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Schools */}
            <motion.div
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl overflow-hidden border border-green-100 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1579651745194-ff4b0f1580d0?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Nigerian school administrators"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <School className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    For Nigerian Schools
                  </h3>
                </div>
                <ul className="space-y-3">
                  {schoolBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Parents */}
            <motion.div
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl overflow-hidden border border-green-100 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="https://media.istockphoto.com/id/1572362241/photo/family-eting-ice-cream-together-outdoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=azomA4wFupSxdKDwVbrXsEAlPGZZYyMUSta5tENIv-w="
                  alt="Nigerian parents and children"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    For Nigerian Parents
                  </h3>
                </div>
                <ul className="space-y-3">
                  {parentBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Students */}
            <motion.div
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl overflow-hidden border border-green-100 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="https://plus.unsplash.com/premium_photo-1714211557697-f3339798f89c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Nigerian students learning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    For Nigerian Students
                  </h3>
                </div>
                <ul className="space-y-3">
                  {studentBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Education Ministries */}
            <motion.div
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl overflow-hidden border border-green-100 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="https://imgs.search.brave.com/3nbsB0F115FFD8V6lDPKGhA8EfGTcLif4LwqvXDiJpg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9uaWdl/cmlhbmxlYWRlcnMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzA3L0NvbXBs/ZXRlLUxpc3QtT2Yt/TWluaXN0cmllcy1J/bi1OaWdlcmlhLUFu/ZC1UaGUtTWluaXN0/ZXJzLmpwZw"
                  alt="Nigerian government education officials"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    For Nigerian Education Ministries
                  </h3>
                </div>
                <ul className="space-y-3">
                  {ministryBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Trusted By Leading Nigerian Institutions</h2>
            <p className="text-gray-600">Working together to transform education across Nigeria</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                  {partner.name.charAt(0)}
                </div>
                <p className="text-sm font-medium text-gray-700">{partner.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Trust Indicators */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Trusted & Secure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with the highest security standards and Nigerian regulatory compliance
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => {
              const Icon = indicator.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-green-200 transition-colors duration-200">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{indicator.text}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/8423587/pexels-photo-8423587.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Nigerian students in classroom"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Your School's Record Management
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join the digital revolution in Nigerian education. Start your
              journey with EduChain today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={handleRequestDemo}
                className="bg-white text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Demo
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Pilot Program
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayCircle className="w-5 h-5" />
                <span>Watch Platform Demo</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about how EduChain can transform your school or
                educational institution? Our team is ready to help.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call Us</p>
                    <p className="font-medium text-gray-900">
                      {contactInfo.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-900">
                      {contactInfo.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Office</p>
                    <p className="font-medium text-gray-900">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Request Information
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Institution
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="School or organization name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    rows={4}
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="w-8 h-8 text-green-600" />
                <span className="text-xl font-bold">EduChain Nigeria</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Building the future of academic mobility in Nigeria, one student
                at a time. From Lagos to Kano, Enugu to Port Harcourt.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={handleRequestDemo}
                  className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                </button>
                <button className="border border-gray-600 text-gray-300 px-6 py-2 rounded-xl hover:border-gray-500 transition-all duration-200 transform hover:scale-105">
                  Contact Us
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#features"
                    className="hover:text-white transition-all duration-200 hover:underline hover:underline-offset-4"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-200 hover:underline hover:underline-offset-4"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-200 hover:underline hover:underline-offset-4"
                  >
                    Integration
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-200 hover:underline hover:underline-offset-4"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-200 hover:underline hover:underline-offset-4"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-200 hover:underline hover:underline-offset-4"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-200 hover:underline hover:underline-offset-4"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-200 hover:underline hover:underline-offset-4"
                  >
                    Training
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 EduChain Nigeria. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all duration-200 hover:underline hover:underline-offset-4 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all duration-200 hover:underline hover:underline-offset-4 text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all duration-200 hover:underline hover:underline-offset-4 text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
