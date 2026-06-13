// Shown in the Add-entry modal when an entry for today already exists.
// Replaces the form with a friendly message instead of empty fields.
const AlreadyWroteToday = () => {
    return (
        <div className="text-center py-6">
            <h2 className="text-2xl font-bold text-navy">You already added an entry today.</h2>
            <p className="mt-2 text-black">
                Every day deserves one special entry. Come back tomorrow to write your next story.
            </p>
        </div>
    );
};

export default AlreadyWroteToday;
