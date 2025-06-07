import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Get In Touch
        </h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Mail className="h-6 w-6" />
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                  <a href="mailto:sameermansur2004@gmail.com" className="text-gray-900 dark:text-white hover:text-blue-600">
                    sameermansur2004@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                  <p className="text-gray-900 dark:text-white">+91 9483061865</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                  <p className="text-gray-900 dark:text-white">Hubli, Karnataka, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Links */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Linkedin className="h-6 w-6" />
              Professional Links
            </h3>
            <div className="space-y-4">
              <a
                href="https://github.com/Sameer-S-M"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
                <span>GitHub Profile</span>
              </a>

              <a
                href="https://www.linkedin.com/in/sameer-s-mansur/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
