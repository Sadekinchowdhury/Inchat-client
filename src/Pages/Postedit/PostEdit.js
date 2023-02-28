import React from 'react';

const PostEdit = () => {
    return (


        <div>


            <label
                htmlFor="my-modal-6"
                className="btn-explore-about  border-2 px-8 py-3 border-green-600 rounded-md"
            >
                Edit
            </label>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-gray-800">
                    <div className="card-body">
                        <div className="modal-action">
                            <label htmlFor="my-modal-6" className="font-bold text-white">
                                X
                            </label>
                        </div>
                        <p className="text-4xl mb-5 text-all-green font-bold">
                            Edit
                        </p>
                        {/* <form  >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    placeholder="Name"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("email", { required: true })}
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mb-3">
                                <textarea
                                    {...register("msg", { required: true })}
                                    className="input h-36 text-white input-bordered"
                                    id=""
                                    cols="30"
                                    placeholder="Ask your questions"
                                    rows="10"
                                ></textarea>
                            </div>
                            <div className="form-control mb-3">
                                <button className="btn-explore-about border-2 px-8 py-3 border-green-600 rounded-md  ">
                                    Submit
                                </button>
                            </div>
                        </form> */}
                    </div>
                </div>
            </div>
        </div>


    );
};

export default PostEdit;