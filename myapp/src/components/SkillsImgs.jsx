import cpp from "../assets/cpp.svg";
import docker from "../assets/docker.png";
import pytorch from "../assets/download.png";
import nodejs from "../assets/nodejs.png";
import react from "../assets/React-icon.svg.png";
import sql from "../assets/sql_data_base_with_logo.png";
import tensorflow from "../assets/TensorFlow_logo.svg.png";


function Imgs() {
    return (
            <div className="p-8 flex flex-row flex-wrap justify-center gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-lg">
                  <img 
                        src={cpp}
                        alt="cppIcon"
                        className="w-16 h-16 rounded-full object-cover shadow-lg"
                    />
                </div>
                <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-lg">
                    <img 
                        src={docker}
                        alt="dockerIcon"
                        className="w-28 h-28 rounded-full object-contain shadow-lg items-center"
                    />
                </div>
                <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-lg">
                    <img 
                        src={react}
                        alt="reactIcon"
                        className="w-20 h-20 rounded-full object-contain shadow-lg items-center"
                    />
                </div>

                <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-lg">
                    <img 
                        src={nodejs}
                        alt="nodejsIcon"
                        className="w-20 h-20 rounded-full object-contain shadow-lg items-center"
                    />
                </div>
                <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-lg">
                    <img 
                        src={pytorch}
                        alt="pytorchIcon"
                        className="w-20 h-20 rounded-full object-contain shadow-lg items-center"
                    />
                </div>
                <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-lg">
                    <img 
                        src={sql}
                        alt="sqlIcon"
                        className="w-20 h-20 rounded-full object-contain shadow-lg items-center"
                    />
                </div>
                <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-lg">
                    <img 
                        src={tensorflow}
                        alt="tensorflowIcon"
                        className="w-40 h-40 rounded-full object-contain shadow-lg items-center"
                    />
                </div>

            
        </div>
    );
}

export default Imgs;