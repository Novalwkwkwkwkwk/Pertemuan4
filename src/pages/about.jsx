import { Link } from "react-router-dom";

const PentingnyaOlahraga = () => {
  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-50">
      <div className="w-full max-w-lg text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-red-600">Pentingnya Olahraga</h1>
        <p className="text-slate-700 mb-4" style={{ textAlign: "justify" }}>
          Olahraga memiliki peran penting dalam menjaga kesehatan tubuh dan pikiran. Dengan rutin berolahraga, Anda tidak hanya meningkatkan kebugaran fisik, tetapi juga memperkuat mental, mengurangi stres, dan meningkatkan kualitas tidur. Selain itu, olahraga membantu dalam membangun disiplin diri dan semangat kompetisi yang sehat.
        </p>
        <p className="text-slate-700 mb-4" style={{ textAlign: "justify" }}>
          Menggunakan alat olahraga yang tepat adalah kunci untuk memaksimalkan hasil olahraga Anda dan menghindari cedera. Alat-alat yang sesuai akan mendukung pergerakan tubuh secara alami dan memberikan perlindungan yang optimal. Berikut adalah beberapa jenis alat olahraga yang penting:
        </p>
        <ul className="text-slate-700 mb-6 text-left">
          <li>✔ Sepatu olahraga yang mendukung aktivitas spesifik, seperti lari, basket, atau tenis.</li>
          <li>✔ Alat fitness seperti dumbbell, resistance band, dan treadmill untuk latihan kekuatan dan kardio.</li>
          <li>✔ Pakaian atletik yang nyaman untuk menunjang mobilitas dan menyerap keringat.</li>
          <li>✔ Aksesori seperti matras yoga, botol minum, dan smartwatch untuk memantau performa.</li>
        </ul>
        <p className="text-slate-700 mb-6" style={{ textAlign: "justify" }}>
          Dengan kombinasi olahraga yang konsisten dan penggunaan peralatan yang tepat, Anda dapat meningkatkan performa fisik dan mencapai target kesehatan Anda lebih cepat.
        </p>
        {/* Call-to-Action */}
        <Link
          to="/shop/sports"
          className="px-5 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-500 transition duration-300"
        >
          Find the Perfect Gear
        </Link>
        <div className="mt-4">
          <Link
            to="/contact"
            className="text-red-600 underline hover:text-red-500"
          >
            Need Help? Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PentingnyaOlahraga;
