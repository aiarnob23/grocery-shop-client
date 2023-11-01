import logo from '../../assets/logo.jpg';

const TopNav = () => {
    return (
        <nav className='flex items-center justify-between px-4 py-5 bg-slate-300'>
            <div className='flex items-center gap-1'>
                <div><img className='h-10 rounded-lg' src={logo} alt="" /></div>
                <div className='text-green-600 font-bold text-xl'>Air Grocery</div>
            </div>
            <div>
                <input
                    className='rounded-lg p-1 pr-8'
                    placeholder='Search'
                    type="text" />
            </div>
            <div>
                <button className='outline-1 font-semibold text-green-600 outline rounded-lg p-2'>LOGIN</button>
            </div>
        </nav>
    );
};

export default TopNav;