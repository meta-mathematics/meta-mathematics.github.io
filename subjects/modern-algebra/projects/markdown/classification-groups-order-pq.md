# Classification of Groups of Order pq

## An End-to-End Metacognitive Mathematics Solution

**Problem:** MA-03 in the [local problem bank](problems.md).  
**Approach:** a Hybrid Five-Faculty Knowledge Graph whose agents own mathematical proof obligations.  
**Evidence status:** the complete mathematical argument is given below. Agent messages and repair episodes are explicitly illustrative; no deployed multi-agent run or proof-assistant certificate is claimed.

Every agent contains **Ego, Memory, Intellect, Sense, and Action**. Ego fixes its goal and coordinates publication; Memory holds definitions and proved imports; Intellect selects a strategy; Sense audits hypotheses and boundary conditions; Action executes deductions and checks the output. The faculty table describes these capacities inside each node, rather than five separate faculty agents.

Logical dependencies form a DAG. Iteration and diagnostic feedback belong to the orchestration layer. A diagnostic can request a revised proof but cannot establish a premise by assuming its downstream conclusion. Changed exports invalidate dependent certificates until they are rechecked. Numerical examples illustrate the argument; the universal conclusions follow from the proof.

## 1. Target Classification and Required Outputs

> Let p<q be primes. If p does not divide q−1, every group of order pq is isomorphic to $C_{pq}$. If p divides q−1, there are exactly two isomorphism classes: $C_{pq}$ and one nonabelian group $C_q\rtimes C_p$.

A complete classification must prove that every input group has one of the stated structures, construct each listed structure, and prove that apparently different nontrivial constructions are isomorphic. Sylow congruences alone do not close these obligations.

**Imports:** Sylow's existence/counting theorems; Lagrange's theorem; finite product-set counting; the theorem that the multiplicative group of the prime field F_q is cyclic of order q−1. The last result is the supporting primitive-root module, not an unstated assumption. Prime-order groups are cyclic because a nonidentity element generates a subgroup whose nontrivial order divides that prime.

## 2. Five-Agent Graph

```text
N1 Prime-order contract → N2 Unique normal q-subgroup → N3 Action decomposition
                                                            │
                                                            ▼
N4 Trivial/nontrivial action construction and equivalence → N5 Exhaustive classification
```

N4 imports N3's decomposition; N5 imports both N3's exhaustion and N4's construction and uniqueness certificates.

| Node | Memory | Sense | Intellect | Action | Ego |
|---|---|---|---|---|---|
| N1 Contract | Primes, subgroup orders, Sylow counts | Require p<q | Fix classification obligations | List allowable orders | Frame complete list |
| N2 Normal Q | Sylow q-count theorem | Use count divides p | Eliminate the larger candidate | Prove Q unique and normal | Supply structural anchor |
| N3 Decomposition | Prime-order cyclic groups | Check trivial intersection and full product | Translate conjugation into exponent r | Derive relations and unique normal form | Reduce group to an action |
| N4 Actions | Cyclic Fq multiplicative group | Separate permission, existence, and equivalence | Classify homomorphisms Cp→Aut(Cq) | Construct products and compare generators | Close action classification |
| N5 Synthesis | All action and decomposition evidence | Keep cyclic case in both regimes | Join exhaustive branches | Prove distinctness and no omissions | Export isomorphism classes |

## 3. Complete Node-by-Node Proof

### N1–N2 — A Unique Normal Subgroup of Order q

Let n_q be the number of Sylow q-subgroups. Sylow gives $n_q\mid p$ and $n_q\equiv1\pmod q$. Thus n_q is 1 or p. Since 1<p<q, p cannot be congruent to 1 modulo q. Hence n_q=1, and its unique subgroup Q is normal.

Choose a Sylow p-subgroup P. Both Q and P are cyclic, of orders q and p respectively. Their intersection is trivial because its order divides both distinct primes. The product set QP has pq elements, hence equals G.

### N3 — Every Group Is Encoded by One Conjugation Action

Choose generators x of Q and y of P. Every g in G has a unique expression $x^iy^j$, with i modulo q and j modulo p. Conjugation by y preserves Q, so

$$yxy^{-1}=x^r$$

for nonzero r modulo q. Because y^p=1, repeated conjugation gives $r^p\equiv1\pmod q$.

Multiplying normal forms gives

$$(x^iy^j)(x^ky^l)=x^{i+r^jk}y^{j+l}.$$

Thus the group is completely determined by the action parameter r, and every group in the problem has such a parameter. Its order in F_q multiplicative is either 1 or p.

### N4A — The Trivial Action Gives the Cyclic Class

If r=1, x and y commute. The element xy has order pq: if (xy)^k=1, then x^k=y^(−k) lies in Q∩P, so both q and p divide k. Conversely (xy)^(pq)=1. Therefore G is cyclic of order pq.

This class exists for every pair of primes, including when p divides q−1.

### N4B — Construct and Verify the Nontrivial Class

A nontrivial r with r^p=1 has order p. Such r exists exactly when p divides q−1, because F_q multiplicative is cyclic of that order.

For any such r, define a product on pairs $(i,j)\in\mathbb Z/q\mathbb Z\times\mathbb Z/p\mathbb Z$ by

$$(i,j)(k,l)=(i+r^jk,j+l).$$

The condition r^p=1 makes the expression independent of the representative of j. Associativity holds because both ways of multiplying three pairs have first component $i+r^jk+r^{j+l}m$ and second component j+l+n. The identity is (0,0), and the inverse of (i,j) is $(−r^{-j}i,−j)$. Thus this is a group with pq elements.

For x=(1,0), y=(0,1), we have yx=(r,1) and xy=(1,1). Since r≠1, the group is nonabelian. This proves existence rather than merely permitting it.

### N4C — All Nontrivial Actions Give One Isomorphism Class

A cyclic group has a unique subgroup of each order dividing its order. Therefore any two order-p elements r,r' of F_q multiplicative generate the same subgroup, and $r'=r^k$ for some k with 1≤k<p.

In the group constructed with parameter r, replace y by y^k. It still generates P because gcd(k,p)=1, and its action on x is exponent r^k=r'. Consequently the map from the r'-group sending (i,j) to $(i,kj)$ in the r-group respects the multiplication rule and is bijective. All nontrivial actions are therefore isomorphic.

### N5 — Exhaustion, Distinctness, and Branch Closure

N3 shows every group is one of the action constructions. If p does not divide q−1, only r=1 is possible. If p divides q−1, the trivial and nontrivial constructions both exist, and N4C identifies all nontrivial ones. The two classes are distinct because one is abelian and the other is not. The classification follows. $\square$

## 4. Worked Examples

| Order | Divisibility test | Isomorphism classes |
|---|---|---|
| 15 | 3 does not divide 4 | C15 only |
| 6 | 2 divides 2 | C6 and the r=−1 semidirect product, isomorphic to S3 |
| 21 | 3 divides 6 | C21 and one nonabelian group |

For order 21 choose r=2 modulo 7, since 2³=8≡1 and 2≠1. Its relation is yxy^(−1)=x². Choosing r'=4 instead gives no new class: replace y by y². A concrete multiplication is

$$(1,1)(3,2)=(1+2\cdot3,3)=(0,0)$$

in residues modulo 7 and 3. These elements are inverses, consistent with the general inverse formula.

## 5. Illustrative Message Trace

| Interaction | Evidence transferred |
|---|---|
| N2 → N3 | Normal cyclic Q and Sylow P |
| N3 → N4 | Unique pair representation and action condition r^p=1 |
| N4 → N5 | Cyclic construction, nonabelian construction, and generator-change isomorphism |
| N3 → N5 | Every input group belongs to an action branch |
| N5 → caller | Complete list with existence and uniqueness evidence |

## 6. Failure and Five-Faculty Repair

A failed branch observes that Sylow allows n_p=q when p divides q−1 and declares the classification finished.

```json
{"node":"N5","state":"STALLED","failing_faculty":"Action","missing_obligations":["construct nonabelian group","prove all nontrivial actions equivalent","retain cyclic class"],"repair_target":"N4","blocked_export":"exactly two isomorphism classes"}
```

Memory retrieves the automorphism-group structure. Sense distinguishes an allowed count from an actual group. Intellect moves to action parameters. Action supplies the explicit pair group and generator-change isomorphism. Ego then combines exhaustion, construction, uniqueness, and distinctness. This closes the precise gap left by the shorter classification sketch.

## 7. Boundary Audit and Reusable Exports

The assumption p<q identifies which Sylow subgroup is forced normal. Equal primes lead to order p² and a different classification. A nontrivial action does not eliminate the trivial one. Distinct action parameters are not automatically distinct isomorphism classes.

Export normality of Q, the action normal form, semidirect construction, and the full classification. The resulting module demonstrates structural branching, a concrete construction, and equivalence between apparently different solutions.

## Evidence, Provenance, and Next Use

**Additional execution check:** exhaustively checked associativity and inverses for the order-6 construction and both displayed order-21 action parameters. Checked the order-21 generator-change isomorphism on all 441 element pairs. These finite checks supplement the universal algebraic proof above.

The proof is complete relative to the explicitly stated elementary definitions and supporting imports. The node outputs provide mathematical evidence for the stated theorem. Kernel verification would require a separate formalization of the exact statements and dependencies; the faculty labels themselves do not certify correctness.

**Mathematical reference:** [University of Minnesota group theory notes: groups of order pq](https://www-users.cse.umn.edu/~garrett/m/algebra/notes_2023-24/02.pdf).

**Framework references:** [Meta-Math essay](../../../Agentic-Math/Essay.md), [Agentic Math book](../../../Agentic-Math/Book.md), and the [Bézout worked example](../../../1-Number-Theory/projects/euclidean-algorithm-and-bezout-identity.md). The node decomposition and demonstration messages are authored for this example.
